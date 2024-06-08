import React from "react";
import { Button } from "antd";
import HeaderDrawerUserDetails from "./header_drawer_user_details";
import HeaderDrawerMenuOptions from "./header_drawer_menu_options";
import HeaderDrawerSocialMedia from "./header_drawer_social_media";
import HeaderDrawerDarkTheme from "./hearder_drawer_dark_theme";

const HeaderDrawerOptions = (props) => {
  const { handle_drawer_close } = props;
  return (
    <>
      <div className="User_login_button_container">
        <Button className="User_login_button">Sign out</Button>
      </div>
      <div className="mobile_header_drawer_theme">
        <HeaderDrawerDarkTheme handle_drawer_close={handle_drawer_close} />
      </div>
      <HeaderDrawerUserDetails />
      <HeaderDrawerMenuOptions />
      <HeaderDrawerSocialMedia />
    </>
  );
};

export default HeaderDrawerOptions;
