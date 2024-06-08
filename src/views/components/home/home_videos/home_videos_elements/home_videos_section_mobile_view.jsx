import { format_views_count } from "@src/helpers/functions";
import { PLAY_ICON } from "@src/helpers/image_constants";
import React from "react";

const HomeVideosSectionMobileView = (props) => {
  const { videos_list } = props;

  const navigate_youtube = () => {
    window.open(
      `https://www.youtube.com/watch?v=${videos_list?.video_id}`,
      "_blank"
    );
  };

  return (
    <div className="home_videos_mobile_view_contents">
      {videos_list?.slice(1, 4).map((video_item, index) => {
        return (
          <div key={index} className="home_videos_mobile_view_item">
            <img
              src={video_item?.thumbnails}
              className="home_videos_mobile_view_image"
              alt={`Video Thumbnail ${index}`}
              onClick={navigate_youtube}
            />
            <div className="home_videos_second_column_overlay_play_button">
              <img src={PLAY_ICON} alt="Play Icon" style={{ width: "100%" }} />
            </div>
            <div className="home_videos_viewed_count_and_published_div">
              <text className="home_videos_viewed_count_and_published">
                {`${format_views_count(video_item?.views)} views | ${
                  video_item?.days_since_published
                } days ago`}
              </text>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeVideosSectionMobileView;
