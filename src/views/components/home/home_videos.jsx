import { useAPIRequest } from "@src/helpers/hooks";
import { get_videos_list_query } from "@src/services/graphql/graphql_home";
import { useDynamicSelector } from "@src/services/redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeVideosSecondColumn from "./home_videos/home_videos_second_column";
import HomeVideosFirstColumn from "./home_videos/home_videos_first_column";
import HomeVideosSectionMobileView from "./home_videos/home_videos_elements/home_videos_section_mobile_view";
import HomeVideosTitleRowContent from "./home_videos/home_videos_elements/home_videos_title_row_content";
import HomeVideosTitleRowContentMobileView from "./home_videos/home_videos_elements/home_videos_title_row_content_mobile_view";
import { useTranslation } from "react-i18next";
import HomeVideosSubscribeButton from "./home_videos/home_videos_elements/home_videos_subscribe";

const HomeVideos = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  let video_list_request = useAPIRequest(
    "get_video_list",
    get_videos_list_query
  );

  const { items: videos_list } = useDynamicSelector("get_video_list");

  console.log("videos_list", videos_list);

  useEffect(() => {
    get_video_list();
  }, []);

  const get_video_list = () => {
    video_list_request({}, true);
  };
  const handle_see_all = () => {
    // navigate(ROUTES.VIDEOS);
  };

  const handle_subscribe = () => {
    window.open("https://www.youtube.com/@Youturnmedia", "_blank");
  };
  return (
    <>
      <div className="home_videos_section">
        <HomeVideosFirstColumn videos_list={videos_list} />
        <HomeVideosSecondColumn videos_list={videos_list} />
      </div>
      <div className="home_videos_section_mobile_view">
        <div className="home_videos_section_mobile_view_contents">
          <HomeVideosTitleRowContentMobileView />
          <p className="home_page_videos_text_content_mobile_view">
            {t("video_content")}
          </p>
        </div>

        <HomeVideosSectionMobileView videos_list={videos_list} />
        <div className="mobile_view_subscribe_button_position">
          <HomeVideosSubscribeButton />
        </div>
      </div>
    </>
  );
};

export default HomeVideos;
