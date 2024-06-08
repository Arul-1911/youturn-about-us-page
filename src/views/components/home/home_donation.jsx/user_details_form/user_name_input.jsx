import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const UserNameInput = () => {
  const { t } = useTranslation();
  return (
    <Form.Item
      name="name"
      label={t("name")}
      rules={[{ required: true, message: "Please enter your name" }]}
    >
      <Input placeholder={t("name")}></Input>
    </Form.Item>
  );
};

export default UserNameInput;
