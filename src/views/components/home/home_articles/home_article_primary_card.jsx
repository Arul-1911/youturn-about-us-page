import { format_view_count, split_content } from "@src/helpers/functions";
import { READING_TAG } from "@src/helpers/image_constants";
import { useDynamicSelector } from "@src/services/redux";
import { Typography } from "antd";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillClockCircle } from "react-icons/ai";
import { LuEye } from "react-icons/lu";

const HomeArticlePrimaryCard = () => {
  const { t } = useTranslation();

  const { items: article_list } = useDynamicSelector("get_article_list");
  return (
    <div className="home_article_first_card_container">
      <div className="home_article_card_thumbnail_container">
        <img
          src={article_list?.[0]?.thumbnail_img}
          className="home_article_trending_thumbnail"
        />
      </div>
      <div className="home_article_card_details_wrapper">
        <div className="home_article_card_title">
          <Typography className="title_text">
            {article_list?.[0]?.title}
          </Typography>
        </div>
        <div className="home_article_card_subtitle">
          <Typography className="sub_title_text">
            {split_content(
              article_list?.[0]?.subtitle || article_list?.[0]?.content,
              "_",
              40
            )}
          </Typography>
        </div>

        <div className="home_article_card_author_details_wrapper">
          <div className="home_article_card_author_name_container">
            <Typography className="sub_title_text">
              {article_list?.[0]?.staff_profile?.name ||
                article_list?.[0]?.user_profile?.name ||
                "youturn Editorial"}
            </Typography>
          </div>
          <div className="home_article_card_author_details">
            <div className="home_article_card_time_container">
              <LuEye className="view_icon" />
              <Typography className="sub_title_text">
                {format_view_count(article_list?.[0]?.views)}
              </Typography>
            </div>
          </div>
        </div>

        <div className="home_article_card_author_details_wrapper">
          <div className="home_article_card_author_name_container">
            <Typography className="sub_title_text">
              {moment(
                article_list?.[0]?.published_date_time
                  ? parseInt(article_list[0]?.published_date_time, 10)
                  : article_list?.[0]?.created_date_time
              ).format("DD MMM, YYYY")}
            </Typography>
          </div>
          <div className="home_article_card_author_details">
            <div className="home_article_card_time_container">
              <AiFillClockCircle className="reading_icon" />

              <Typography className="sub_title_text">
                {article_list?.[0]?.reading_time} {t("min")}
              </Typography>
            </div>
          </div>
        </div>
        <div className="home_article_card_continue_read">
          <h4 className="continue_reading_text">{t("continue_reading")}</h4>
          <img src={READING_TAG} style={{ height: "30px" }} />
        </div>
      </div>
    </div>
  );
};

export default HomeArticlePrimaryCard;
