import React from "react";

const HeaderDrawerMenuOptions = () => {
  const menu_items = [
    { href: "/home", label: "Home" },
    { href: "/articles", label: "Articles" },
    { href: "/fact-check", label: "Fact Check" },
    { href: "/user-contribution", label: "User Contribution" },
    { href: "/videos", label: "Videos" },
    { href: "/about-us", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/support-us", label: "Support Us" },
  ];

  return (
    <>
      <hr className="drawer_line" />
      <div className="drawer_menu_container">
        {menu_items.map((item) => (
          <a key={item.href} href={item.href} className="user_layout_menus">
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default HeaderDrawerMenuOptions;
