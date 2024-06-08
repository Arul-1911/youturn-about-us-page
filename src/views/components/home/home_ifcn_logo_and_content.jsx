import { SIGNATORY } from "@src/helpers/image_constants";
import { Col } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const HomeIfcnLogoAndContent = () => {
  const { t } = useTranslation()
  const on_click_ifcn_logo = () => {
    window.open(
      "https://ifcncodeofprinciples.poynter.org/profile/youturn",
      "_blank"
    );
  };
  return (
    <div className="home_logo_and_container" >
      <div className="logo_content_container">
        <h6 className="home_slot_youturn_present_title">YouTurn presents</h6>
        <h2 className="home_slot_title">Fact Check</h2>
        <text className="home_slot_description">
          {t("slot_top_content")}
        </text>
      </div>
      {/* <div style={{flex:1}}>
        <img
          className="signatory_logo"
          src={SIGNATORY}
          onClick={on_click_ifcn_logo}
        />
      </div> */}
    </div>
  );
};

export default HomeIfcnLogoAndContent;
