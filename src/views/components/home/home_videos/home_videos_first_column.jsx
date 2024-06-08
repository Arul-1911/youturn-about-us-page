import React from "react";
import { useTranslation } from "react-i18next";
import HomeVideosTitleRowContent from "./home_videos_elements/home_videos_title_row_content";
import HomeVideosImageComponents from "./home_videos_elements/home_videos_image_components";
import HomeVideosSubscribeButton from "./home_videos_elements/home_videos_subscribe";
const HomeVideosFirstColumn = (props) => {
  const { videos_list } = props;
  const { t } = useTranslation();
  return (
    <div className="home_videos_first_column">
      <HomeVideosTitleRowContent />
      <p className="home_page_videos_text_content">{t("video_content")}</p>
      <HomeVideosImageComponents videos_list={videos_list} />
      <div className="home_videos_subscribe_button_position">
        <HomeVideosSubscribeButton />
      </div>
    </div>
  );
};
export default HomeVideosFirstColumn;
