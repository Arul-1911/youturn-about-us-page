import { format_views_count } from "@src/helpers/functions";
import { PLAY_ICON } from "@src/helpers/image_constants";
import React, { useEffect, useState } from "react";
const HomeVideosSecondColumn = (props) => {
  const { videos_list } = props;

  const [slice_count, set_slice_count] = useState(get_slice_count());

  const navigate_youtube = () => {
    window.open(
      `https://www.youtube.com/watch?v=${videos_list?.video_id}`,
      "_blank"
    );
  };

  useEffect(() => {
    const handle_resize = () => {
      set_slice_count(get_slice_count());
    };
    window.addEventListener("resize", handle_resize);
    return () => {
      window.removeEventListener("resize", handle_resize);
    };
  }, []);

  function get_slice_count() {
    const screen_width = window.innerWidth;
    if (screen_width > 1440) {
      return 10;
    } else if (screen_width > 1024) {
      return 7;
    } else {
      return 6;
    }
  }

  return (
    <div className="home_videos_second_column">
      <div className="home_videos_second_column_contents">
        {videos_list?.slice(1, slice_count).map((video_item, index) => {
          return (
            <div key={index} className="home_video_item">
              <div className="home_video_thumbnail_container">
                <img
                  src={video_item?.thumbnails}
                  className="home_videos_second_column_image"
                  alt={`Video Thumbnail ${index}`}
                />
                <div className="home_videos_second_column_overlay_play_button">
                  <img
                    src={PLAY_ICON}
                    alt="Play Icon"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <div className="home_videos_viewed_count_and_published_div">
                <span className="home_videos_viewed_count_and_published">{`${format_views_count(
                  video_item?.views
                )} views | ${video_item?.days_since_published} days ago`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomeVideosSecondColumn;
