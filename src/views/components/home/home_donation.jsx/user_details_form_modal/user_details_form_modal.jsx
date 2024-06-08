import { Modal } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import HomeDonationUserDetailsForm from "../home_donation_user_details_form";

const UserDetailsFormModal = (props) => {
  const { modal_open, on_cancel, amount } = props;
  const { t } = useTranslation();
  return (
    <Modal
      title={t("enter_details")}
      width={500}
      open={modal_open}
      onCancel={() => {
        on_cancel(false);
      }}
      destroyOnClose
      footer={null}
    >
      <HomeDonationUserDetailsForm modal_close={on_cancel} amount={amount} />
    </Modal>
  );
};

export default UserDetailsFormModal;
