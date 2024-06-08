import { HEADER_LOGO } from "@src/helpers/image_constants";
import { Image } from "antd";
import React from "react";

const HeaderLogo = () => {
  return (
    <div className="user_layout_logo_container">
      <Image preview={false} className="user_layout_logo" src={HEADER_LOGO} />
    </div>
  );
};

export default HeaderLogo;
