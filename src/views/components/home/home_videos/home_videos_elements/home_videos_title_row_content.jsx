import { Button } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
const HomeVideosTitleRowContent = () => {
  const { t } = useTranslation();
  return (
    <div className="home_videos_title_row">
      <div className="home_videos_title">
        <h1 className="home_videos_title_text">{t("videos")}</h1>
      </div>
      <div className="see_all_btn_position">
        <Button className="see_all_btn" type="default">
          {t("see_all")}
        </Button>
      </div>
    </div>
  );
};
export default HomeVideosTitleRowContent;
