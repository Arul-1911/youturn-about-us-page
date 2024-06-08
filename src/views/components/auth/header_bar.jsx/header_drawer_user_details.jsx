import { DEFAULT_USER } from "@src/helpers/image_constants";
import { Image, Typography } from "antd";
import React from "react";
import { CiLight } from "react-icons/ci";

const HeaderDrawerUserDetails = () => {
  return (
    <div className="drawer_user_detail_container">
      <div className="drawer_user_profile_container">
        <Image
          preview={false}
          className="drawer_user_profile"
          src={DEFAULT_USER}
        />
      </div>
      <div className="drawer_welcome_container">
        <Typography className="drawer_user_name_text"> {"Hello,"}</Typography>
      </div>

      <div className="drawer_user_name_container">
        <Typography className="drawer_user_name_text">{"YouTurn"}</Typography>
      </div>
    </div>
  );
};

export default HeaderDrawerUserDetails;
