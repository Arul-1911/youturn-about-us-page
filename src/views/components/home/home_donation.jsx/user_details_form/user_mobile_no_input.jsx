import React from "react";
import { Form, InputNumber } from "antd";
import { useTranslation } from "react-i18next";

const UserMobileNoInput = () => {
  const { t } = useTranslation();

  return (
    <Form.Item
      name="mobile"
      label={t("mobile")}
      rules={[
        { required: true, message: "Please enter your mobile number" },
        {
          pattern: /^\d{10}$/,
          message: "Please enter a 10-digit number",
        },
      ]}
    >
      <InputNumber
        placeholder={t("mobile")}
        maxLength={10}
        controls={false}
        changeOnWheel={false}
        className="user_detail_mobile_no_input"
      />
    </Form.Item>
  );
};

export default UserMobileNoInput;
