import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

const UserDetailsSubmitButton = () => {
  const { t } = useTranslation();

  return (
    <div className="user_details_submit_button">
      <Button htmlType="submit" className="submit_button">
        {t("submit")}
      </Button>
    </div>
  );
};

export default UserDetailsSubmitButton;
