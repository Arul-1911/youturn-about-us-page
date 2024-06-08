import React from "react";
import { useTranslation } from "react-i18next";
import { NOTIFICATION_ICON, PLAY_ICON } from "@src/helpers/image_constants";
const HomeVideosSubscribeButton = () => {
  const { t } = useTranslation();
  return (
    <div className="home_videos_subscribe_button">
      <img className="home_videos_subscribe_button_image" src={PLAY_ICON} />

      <text>{t("subscribe")}</text>
      <img
        className="home_videos_subscribe_button_image"
        src={NOTIFICATION_ICON}
      />
    </div>
  );
};
export default HomeVideosSubscribeButton;
