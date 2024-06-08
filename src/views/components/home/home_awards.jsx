import { useAPIRequest } from "@src/helpers/hooks";
import { get_award_query } from "@src/services/graphql/graphql_home";
import { useDynamicSelector } from "@src/services/redux";
import React, { useEffect } from "react";
import HomeAwardsCard from "./home_awards/home_awards_card";
import Carousel from "react-multi-carousel";
import { useTranslation } from "react-i18next";
import { Button } from "antd";

const HomeAwards = () => {
  const { t } = useTranslation();
  let award_list_request = useAPIRequest("get_award_list", get_award_query);

  const { items: award_list, loading: award_list_loading } =
    useDynamicSelector("get_award_list");
  console.log("get_award_list", award_list);

  useEffect(() => {
    get_award_list();
  }, []);

  const get_award_list = () => {
    award_list_request({}, true);
  };

  const handle_award = (perma_link) => {
    window.open(perma_link, "_blank");
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    large_laptop: {
      breakpoint: { max: 2560, min: 1640 },
      items: 3,
      slidesToSlide: 3,
    },
    laptop: {
      breakpoint: { max: 1024, min: 480 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet1: {
      breakpoint: { max: 768, min: 480 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="home_awards_section">
      <h2 className="home_awards_section_title">
        {t("awards_and_recognition")}
      </h2>
      {award_list?.length > 0 && (
        <Carousel responsive={responsive}>
          {award_list?.map((award, index) => (
            <div key={index} className="home_awards_card_div">
              <HomeAwardsCard award={award} />
            </div>
          ))}
        </Carousel>
      )}
      <div className="home_awards_section_become_member_div">
        <h6 className="join_us_today_text">{t("join_us_today")}</h6>
        <h3 className="home_awards_section_become_member">
          {t("join_feature")}
        </h3>
        <Button className="become_a_member_button">
          {t("become_a_member")}
        </Button>
      </div>
    </div>
  );
};

export default HomeAwards;
