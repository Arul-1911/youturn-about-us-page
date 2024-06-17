import React, { useEffect, useState } from "react";
import "../../styles/tele_caller/tele_caller.css";
import {
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Pagination,
  Row,
  Col,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useAPIRequest } from "@src/helpers/hooks";
import {
  create_telecaller_mutation,
  delete_telecaller_mutation,
  get_telecallers_query,
  update_telecaller_mutation,
} from "@src/services/graphql/graphql_tele_caller";
import { dynamic_clear, useDynamicSelector } from "@src/services/redux";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

const Add_telecaller = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [form] = Form.useForm();
  const [update_initial_values, set_update_initial_values] = useState({});
  const [current_page, setCurrentPage] = useState(1);
  const [page_size, setPageSize] = useState(3);
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 450,
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      width: 450,
    },
    {
      title: "UserName",
      dataIndex: "username",
      key: "username",
      width: 450,
    },
    {
      title: "Actions",
      key: "actions",
      render: (data) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handle_update(data)}
            style={{
              color: "purple",
            }}
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => handle_delete_confirm(data)}
          />
        </Space>
      ),
    },
  ];

  //used to fetch data from the redux

  const {
    items: tele_caller_list,
    pagination: pagination,
    loading: list_loading,
  } = useDynamicSelector("getTelecallers"); //get data

  const {
    id: created_id,
    status: created_status,
    error: create_error,
    loading: create_loading,
  } = useDynamicSelector("createTelecaller"); //create data

  const {
    status: deleted_status,
    error: delete_error,
    loading: delete_loading,
  } = useDynamicSelector("deleteTelecaller"); //delete  data

  const {
    status: updated_status,
    error: updated_error,
    loading: updated_loading,
  } = useDynamicSelector("updateTelecaller"); //update data

  //api request to server

  const get_all_telecallers_data = useAPIRequest(
    "getTelecallers",
    get_telecallers_query
  ); //READ

  const create_telecaller_data = useAPIRequest(
    "createTelecaller",
    create_telecaller_mutation
  ); //CREATE

  const delete_telecaller_data = useAPIRequest(
    "deleteTelecaller",
    delete_telecaller_mutation
  ); //DELETE

  const update_telecaller_data = useAPIRequest(
    "updateTelecaller",
    update_telecaller_mutation
  ); //UPDATE

  //CREATE/UPDATE DATA FUNCTION
  const handleOk = async (values) => {
    const form_values = await form.validateFields();
    if (isEditMode) {
      update_telecaller_data(
        {
          json: { id: form.getFieldValue("id"), data: form_values },
        },
        true
      );
    } else {
      create_telecaller_data(
        {
          json: { data: values },
        },
        true
      );
    }

    form.resetFields();
    setIsModalVisible(false);
  };

  //DELETE DATA FUNCTION

  const handle_delete_confirm = (data) => {
    Modal.confirm({
      title: "Confirmation",
      content: `Are you sure want to delete ${data.name}?`,
      okText: "Yes",
      cancelText: "No",
      onOk: () => {
        handle_delete(data);
      },
      maskClosable: true,
    });
  };

  function handle_delete(data) {
    delete_telecaller_data({
      json: {
        id: data.id,
      },
    });
  }

  //UPDATE DATA FUNCTION

  const handle_update = (data) => {
    form.setFieldsValue(data);
    setIsEditMode(true);
    setIsModalVisible(true);
  };

  //PAGINATION FETCH DATA FUNCTION

  const fetch_data = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
    get_all_telecallers_data(
      { json: { page_number: page, page_limit: size } },
      true
    );
  };

  //useEffect

  useEffect(() => {
    if (created_status === "success") {
      toast.success("User created successfully");
      setIsModalVisible(false);
      dispatch(dynamic_clear("createTelecaller"));

      get_all_telecallers_data(
        { json: { page_number: current_page, page_limit: page_size } },
        true
      );
    } else if (create_error) {
      toast.error("failed to create user", create_error.message);
      dispatch(dynamic_clear("createTelecaller"));
      get_all_telecallers_data(
        { json: { page_number: current_page, page_limit: page_size } },
        true
      );
    } else if (deleted_status === "success") {
      toast.success(`Deleted successfully`);
      dispatch(dynamic_clear("deleteTelecaller"));
      get_all_telecallers_data(
        { json: { page_number: current_page, page_limit: page_size } },
        true
      );
    } else if (delete_error) {
      toast.error("Error in deleting data");
      dispatch(dynamic_clear("deleteTelecaller"));
      get_all_telecallers_data(
        { json: { page_number: current_page, page_limit: page_size } },
        true
      );
    } else if (updated_status === "success") {
      get_all_telecallers_data(
        { json: { page_number: current_page, page_limit: page_size } },
        true
      );
      toast.success("User updated successfully");
      setIsModalVisible(false);
      dispatch(dynamic_clear("updateTelecaller"));
    } else if (updated_error) {
      toast.error("failed to update user", updated_error.message);
      dispatch(dynamic_clear("updateTelecaller"));
      get_all_telecallers_data(
        { json: { page_number: current_page, page_limit: page_size } },
        true
      );
    }
  }, [
    created_status,
    create_error,
    deleted_status,
    delete_error,
    updated_status,
    updated_error,
  ]);

  //useEffect for get all data

  useEffect(() => {
    get_all_telecallers_data(
      { json: { page_number: current_page, page_limit: page_size } },
      true
    );
  }, []);

  const showModal = () => {
    form.resetFields();
    set_update_initial_values({});
    setIsEditMode(false);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    form.resetFields();
    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: 24 }}>
      <div className="add_tele_caller_model_container">
        <Button
          style={{
            marginBottom: 16,
            height: 40,
            // backgroundColor: "gray",
            border: "1px solid purple",
            color: "black",
          }}
          onClick={showModal}
        >
          Add TeleCaller
        </Button>
      </div>
      <Table
        dataSource={tele_caller_list}
        columns={columns}
        pagination={false}
      />

      <Pagination
        showSizeChanger={true}
        current={current_page}
        hideOnSinglePage={false}
        total={pagination?.total_count}
        pageSizeOptions={[3, 5, 10, 15, 20, 50, 100, 1000]}
        onChange={fetch_data}
        pageSize={page_size}
        style={{ marginTop: "15px" }}
      />

      <Modal
        title={isEditMode ? "Edit TeleCaller" : "Add TeleCaller"}
        open={isModalVisible}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={900} // Adjust the width of the modal
      >
        <Form
          form={form}
          layout="vertical"
          name="add_telecaller_form"
          onFinish={handleOk}
          initialValues={isEditMode ? update_initial_values : {}}
        >
          <Row gutter={19}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  { required: !isEditMode, message: "Please input the name!" },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="mobile"
                label="Mobile"
                rules={[
                  {
                    required: !isEditMode,
                    message: "Please input the mobile number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={19}>
            <Col span={12}>
              <Form.Item
                name="username"
                label="Username"
                rules={[
                  {
                    required: !isEditMode,
                    message: "Please input the username!",
                  },
                ]}
              >
                <Input disabled={isEditMode} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: !isEditMode,
                    message: "Please input the password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>
          <div className="telecaller_btn_container">
            <Form.Item>
              <Button
                className="tele_caller_cancel_button"
                onClick={handleCancel}
              >
                {isEditMode ? "Cancel" : "Close"}
              </Button>
            </Form.Item>
            <Form.Item>
              <Button
                htmlType="submit"
                type="primary"
                className="tele_caller_submit_button"
                style={{
                  backgroundColor: "purple",
                }}
              >
                {isEditMode ? "Update" : "Submit"}
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default Add_telecaller;
