import { MENU_LOGO } from "@src/helpers/image_constants";
import { Drawer, Image } from "antd";
import React, { useState } from "react";
import HeaderBarDrawer from "./header_bar_drawer";

const HeaderDrawerLogo = () => {
  const [is_drawer_open, set_drawer_open] = useState(false);

  const handle_drawer_open = () => {
    set_drawer_open(true);
  };
  const handle_drawer_close = () => {
    set_drawer_open(!is_drawer_open);
  };

  return (
    <>
      <div className="user_layout_drawer_container ">
        <Image
          preview={false}
          className="drawer_menu_icon"
          src={MENU_LOGO}
          onClick={handle_drawer_open}
        />
      </div>
      <HeaderBarDrawer
        is_drawer_open={is_drawer_open}
        handle_drawer_close={handle_drawer_close}
      />
    </>
  );
};

export default HeaderDrawerLogo;
