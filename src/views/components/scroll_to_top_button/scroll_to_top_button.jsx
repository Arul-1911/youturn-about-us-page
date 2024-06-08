import React from "react";
import { UpOutlined } from "@ant-design/icons";

const ScrollToTopButton = ({ handle_scroll_to_top }) => {
  return (
    <div className="scroll_to_top_icon_div" onClick={handle_scroll_to_top}>
      <UpOutlined className="scroll_to_top_icon" />
    </div>
  );
};
export default ScrollToTopButton;
