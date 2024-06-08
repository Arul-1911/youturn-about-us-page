import { DRAWER_CLOSE_ICON } from "@src/helpers/image_constants";
import React from "react";
import { useTranslation } from "react-i18next";
import { MdLightMode } from "react-icons/md";

const HeaderDrawerDarkTheme = (props) => {
  const { handle_drawer_close } = props;
  const { t } = useTranslation();
  return (
    <div className="header_drawer_theme">
      <text className="header_drawer_language_text">{t("english")}</text>
      <MdLightMode size={20} />
      <img
        src={DRAWER_CLOSE_ICON}
        className="drawer_close_icon"
        onClick={handle_drawer_close}
      />
    </div>
  );
};

export default HeaderDrawerDarkTheme;
