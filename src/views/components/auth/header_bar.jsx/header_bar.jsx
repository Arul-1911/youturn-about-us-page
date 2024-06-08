import React from "react";
import HeaderMenus from "./header_menus";
import HeaderSearch from "./header_search";
import HeaderLogo from "./header_logo";
import HeaderDrawerLogo from "./header_drawer_logo";

const HeaderBar = () => {
  return (
    <div className="user_layout_header ">
      <div className="user_layout_container">
        <HeaderLogo />
        <HeaderSearch />
        <HeaderMenus />
        <HeaderDrawerLogo />
      </div>
    </div>
  );
};

export default HeaderBar;
