import { useDynamicSelector } from "@src/services/redux";
import { Col, Row, Typography } from "antd";
import React from "react";
import { LuEye } from "react-icons/lu";
import { AiFillClockCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { ARROW_GIF_ICON } from "@src/helpers/image_constants";
import { date_format, split_content } from "@src/helpers/functions";
import moment from "moment";

const ExposingFakeNewsSecondColumn = () => {
  const { t } = useTranslation();
  const { items: fact_check_list, loading: fact_check_list_loading } =
    useDynamicSelector("get_fact_check_list");

  return (
    <div className="exposing_fake_news_second_section">
      <img
        className="exposing_fake_news_second_column_image image_hover_effect"
        src={fact_check_list?.[1]?.thumbnail_img}
      />

      <Row className="exposing_fake_news_second_column_title_container">
        <Typography className="exposing_fake_news_second_column_title">
          {fact_check_list?.[1]?.title}
        </Typography>
      </Row>
      <Row className="exposing_fake_news_second_column_sub_title_container">
        <Typography className="exposing_fake_news_second_column_sub_title">
          {split_content(
            fact_check_list?.[1]?.subtitle || fact_check_list?.[1]?.content,
            "_",
            40
          )}
        </Typography>
      </Row>
      <Row className="exposing_fake_news_second_column_details_container">
        <Col className="exposing_fake_news_second_column_details_wrapper">
          <Typography className="exposing_fake_news_second_column_author_name">
            {fact_check_list?.[1]?.staff_profile?.name}
          </Typography>

          <Typography className="exposing_fake_news_second_column_details">
            <LuEye className="exposing_fake_news_eye_icon" />
            <text className="exposing_fake_news_second_column_author_name">
              {fact_check_list?.[1]?.views}
            </text>
          </Typography>
        </Col>
        <Col className="exposing_fake_news_second_column_details_wrapper">
          <Typography className="exposing_fake_news_second_column_author_name">
            {date_format(fact_check_list?.[1]?.created_date_time)}
          </Typography>
          <Typography className="exposing_fake_news_second_column_details">
            <AiFillClockCircle />
            <text className="exposing_fake_news_second_column_author_name">
              {`${fact_check_list?.[1]?.reading_time} ${t("min")}`}
            </text>
          </Typography>
        </Col>
      </Row>
      <Row className="fact_check_continue_reading_wrapper">
        <h4 className="continue_reading_text">{t("continue_reading")}</h4>
        <img width={30} height={30} src={ARROW_GIF_ICON} />
      </Row>
    </div>
  );
};

export default ExposingFakeNewsSecondColumn;
