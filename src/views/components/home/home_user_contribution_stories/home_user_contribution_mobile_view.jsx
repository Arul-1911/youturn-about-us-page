import {
  date_format,
  format_views_count,
  split_title,
} from "@src/helpers/functions";
import React from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { AiFillClockCircle } from "react-icons/ai";
import { LuEye } from "react-icons/lu";
import Carousel from "react-multi-carousel";

const HomeUserContributionMobileView = (props) => {
  const { user_contribution_list } = props;
  const { t } = useTranslation();
  const UserContributionMobileCard = (props) => {
    const {
      thumbnail_img,
      published_date_time,
      title,
      height,
      sub_title,
      user_profile,
      view_count,
      loading,
      perma_link,
      img_height,
      img_width,
      reading_time,
      views,
    } = props;
    return (
      <div className="user_contribution_mobile_card_container border-shadow">
        <img
          src={thumbnail_img}
          className="user_contribution_mobile_card_image"
        />
        <div className="display-flex flex-column user_contributed_story_container_footer home_user_contribute_container user_contribution_mobile_card_footer">
          <div className="display-flex flex-row justify-content-between">
            <h6 className="contribute_user_name">{user_profile?.name}</h6>
            <div className="display-flex flex-row g-1  align-center home_user_contribute_footer">
              <LuEye color="red" className="view-count-icon" />
              <text className="view-count-tag">
                {format_views_count(views)}
              </text>
            </div>
          </div>
          <div className="display-flex flex-row justify-content-between">
            <h6 className="user_contribute_publish_time">
              {date_format(published_date_time)}
            </h6>
            <div className="display-flex flex-row g-1 align-center home_user_contribute_footer">
              <AiFillClockCircle color="gray" className="reading-time-icon" />
              <text className="time-tag">
                {reading_time} {t("min")}
              </text>
            </div>
          </div>
        </div>
        <h3 className="home_user_contribute_mobile_title">{title}</h3>
      </div>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 2.5,
    },
    // small_tablet: {
    //   breakpoint: { max: 650, min: 550 },
    //   items: 1.4,
    // },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1.1,
    },
  };
  return (
    <div className="user_contribution_mobile_main_container">
      <h1 className="home_user_contribution_mobile_text">
        {t("user_contributed_stories")}
      </h1>
      {user_contribution_list?.length > 0 && (
        <Carousel responsive={responsive} arrows={false}>
          {user_contribution_list?.map((contribution) => {
            return <UserContributionMobileCard {...contribution} />;
          })}
        </Carousel>
      )}
    </div>
  );
};

export default HomeUserContributionMobileView;
