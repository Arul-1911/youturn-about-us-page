import React from "react";
import { Drawer } from "antd";
import HeaderDrawerOptions from "./header_drawer_options";

const HeaderBarDrawer = (props) => {
  const { is_drawer_open, handle_drawer_close } = props;
  const screen_width = window.innerWidth;
  const placement = screen_width <= 1023 ? "left" : "right";

  let drawer_width;
  if (screen_width <= 480) {
    drawer_width = "80%";
  } else if (screen_width <= 768) {
    drawer_width = "60%";
  } else if (screen_width <= 1023) {
    drawer_width = "20%";
  } else if (screen_width <= 2559) {
    drawer_width = 360;
  } else {
    drawer_width = 600;
  }

  return (
    <Drawer
      className="header_drawer"
      title={null}
      mask={true}
      maskClosable={true}
      placement={placement}
      onClose={() => handle_drawer_close(!is_drawer_open)}
      open={is_drawer_open}
      drawerStyle={{ background: "transparent", overflow: "hidden" }}
      footer={null}
      width={drawer_width}
    >
      <HeaderDrawerOptions handle_drawer_close={handle_drawer_close} />
    </Drawer>
  );
};

export default HeaderBarDrawer;
