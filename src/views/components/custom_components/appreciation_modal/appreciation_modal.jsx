import { Modal } from "antd";
import React from "react";
import AppreciationModalAnimation from "./appreciation_modal_animation";
import { APPRECIATION_IMAGE_ } from "@src/helpers/image_constants";

const AppreciationModal = ({
  appreciation_modal_open,
  set_appreciation_modal,
  subtitle,
  message,
  popper_status,
}) => {
  return (
    <Modal
      visible={appreciation_modal_open}
      closable={false}
      footer={null}
      width={800}
      onCancel={() => set_appreciation_modal(false)}
    >
      <div className="thank_you_modal_content">
        <h2>{"Thank You!"}</h2>
        <h6>{subtitle}</h6>
        <img
          className="thank_you_image"
          src={APPRECIATION_IMAGE_}
          alt="Profile"
        />
        <h6 className="thank_you_message">{message}</h6>
        <AppreciationModalAnimation />
      </div>
    </Modal>
  );
};

export default AppreciationModal;
