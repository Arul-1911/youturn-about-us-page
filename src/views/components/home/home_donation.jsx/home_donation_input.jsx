import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";

const HomeDonationInput = (props) => {
  const { t } = useTranslation();

  const { value, set_amount, class_name } = props;

  const handle_input_change = (e) => {
    const input_value = e.target.value.replace(/\D/, "");
    set_amount(input_value ? parseInt(input_value) : "");
  };
  return (
    <div classNames={"home_donation_input"}>
      <Input
        classNames={"donation_input"}
        rules={[
          {
            required: true,
            message: t("Please enter the donation amount"),
          },
          {
            pattern: /^\d+(\.\d{1,2})?$/,
            message: t("Please enter a valid donation amount"),
          },
        ]}
        placeholder={t("enter_amount")}
        value={value}
        onInput={handle_input_change}
        className={class_name}
      />
    </div>
  );
};

export default HomeDonationInput;
