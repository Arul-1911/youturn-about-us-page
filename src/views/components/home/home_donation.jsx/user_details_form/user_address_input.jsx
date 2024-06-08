import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { useTranslation } from "react-i18next";

const UserAddressInput = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      name="address"
      label={t("address")}
      rules={[{ required: true, message: "Please enter your  address" }]}
    >
      <TextArea placeholder={t("address")}></TextArea>
    </Form.Item>
  );
};

export default UserAddressInput;
