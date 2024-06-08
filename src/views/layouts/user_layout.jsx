import React, { useEffect, useRef, useState } from "react";
import HeaderBar from "../components/auth/header_bar.jsx/header_bar";
import QuickAccessBar from "../components/auth/quick_access_bar/quick_access_bar";
import { Outlet } from "react-router-dom";
import Footer from "../components/auth/footer/footer";
import ScrollToTopButton from "../components/scroll_to_top_button/scroll_to_top_button";

const UserLayout = (props) => {
  console.log("UserLayout", props);
  const top_ref = useRef(null);

  const [show_scroll_icon, set_show_scroll_icon] = useState(false);

  const handle_scroll = () => {
    const scroll_element = top_ref?.current;
    if (scroll_element) {
      const scroll_position = scroll_element.scrollTop;
      set_show_scroll_icon(scroll_position > 100); // Show icon if scrolled more than 100px from the top
    }
  };

  useEffect(() => {
    const scroll_element = top_ref?.current;
    if (scroll_element) {
      scroll_element.addEventListener("scroll", handle_scroll);
      return () => {
        scroll_element.removeEventListener("scroll", handle_scroll);
      };
    }
  }, []);

  const handle_scroll_to_top = () => {
    const element = top_ref.current;
    if (element) {
      element.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  console.log("show_scroll_icon", show_scroll_icon);
  return (
    <div ref={top_ref} className="main-container">
      <QuickAccessBar />
      <HeaderBar />
      <Outlet />
      <Footer />
      {show_scroll_icon && (
        <ScrollToTopButton handle_scroll_to_top={handle_scroll_to_top} />
      )}
    </div>
  );
};

export default UserLayout;
