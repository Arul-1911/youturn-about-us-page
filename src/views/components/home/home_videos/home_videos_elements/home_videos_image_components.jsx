import { split_tamil_english_words } from "@src/helpers/functions";
import { VIDEO_ROUND_ICON } from "@src/helpers/image_constants";
import { Button, Image } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
const HomeVideosImageComponents = (props) => {
  const { videos_list } = props;
  const { t } = useTranslation();
  return (
    <div className="home_page_videos_thumbnail_div">
      <img
        src={videos_list?.[0]?.thumbnails}
        className="home_page_videos_thumbnail"
      />
      <div className="home_videos_thumbnail_overlay_content">
        <div className="home_videos_thumbnail_overlay_content_row">
          <img
            className="home_videos_thumbnail_overlay_play_icon"
            src={VIDEO_ROUND_ICON}
          />
          <div className="home_page_overlay_text_column">
            <text className="home_videos_thumbnail_overlay_text">
              {split_tamil_english_words("Home page videos text content", "", 6)}
            </text>
            <text className="home_videos_thumbnail_overlay_viewed_text">
              {`${"1k views | 3 days ago "}`}
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeVideosImageComponents;
