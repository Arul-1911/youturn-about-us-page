import React from "react";

const HeaderMenus = () => {
  const menu_items = [
    { href: "/fact-check", label: "Fact Check" },
    { href: "/articles", label: "Articles" },
    { href: "/videos", label: "Videos" },
    { href: "/about-us", label: "About Us" },
    { href: "/login", label: "Login" },
  ];
  return (
    <div className="user_layout_menu_container ">
      {menu_items.map((item) => (
        <a key={item.href} href={item.href} className="user_layout_menus">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default HeaderMenus;
