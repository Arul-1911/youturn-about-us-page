import React from "react";
import UserNameInput from "./user_details_form/user_name_input";
import UserMobileNoInput from "./user_details_form/user_mobile_no_input";
import UserAddressInput from "./user_details_form/user_address_input";
import UserDetailsSubmitButton from "./user_details_form/user_details_submit_button";
import { Form } from "antd";
import { create_donation_mutation } from "@src/services/graphql/graphql_donation";
import { useAPIRequest } from "@src/helpers/hooks";

const HomeDonationUserDetailsForm = (props) => {
  const { modal_close, amount } = props;
  const [form] = Form.useForm();
  const handle_user_detail_submit = (values) => {
    modal_close(false);
    create_donation(values);
  };

  let create_donation_request = useAPIRequest(
    "create_donation",
    create_donation_mutation
  );

  const create_donation = (values) => {
    create_donation_request(
      {
        amount: parseInt(amount),
        mobile: String(values?.mobile),
        address: values?.address,
      },
      true
    );
  };

  return (
    <div>
      <Form
        form={form}
        onFinish={handle_user_detail_submit}
        id="donation_form"
        layout="vertical"
      >
        <UserNameInput />
        <UserMobileNoInput />
        <UserAddressInput />
        <UserDetailsSubmitButton />
      </Form>
    </div>
  );
};

export default HomeDonationUserDetailsForm;
