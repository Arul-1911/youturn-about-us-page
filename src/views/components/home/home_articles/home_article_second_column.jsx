import { Button, Col, Row, Typography } from "antd";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { LuEye } from "react-icons/lu";

const HomeArticleSecondColumn = (props) => {
  const { list } = props;
  const { t } = useTranslation();
  const formatted_date = moment(list?.[0]?.created_date_time).format(
    "MMMM Do YYYY"
  );
  return (
    <Row className="home_article_sec_column_inner_row_content">
      <img
        className="exposing_fake_news_first_column_image"
        src={list?.[0]?.thumbnail_img}
      />
      <Col className="home_article_second_column_details">
        <Row className="exposing_fake_news_first_column_details_row">
          <Typography className="exposing_fake_news_first_column_title">
            {list?.[0]?.title}
          </Typography>
        </Row>
        <Row className="exposing_fake_news_first_column_details_wrapper">
          <Col className="exposing_fake_news_first_column_view_count">
            <Typography className="home_article_second_column_writer_name_and_views">
              {list?.[0]?.views}
            </Typography>
            <LuEye className="exposing_fake_news_first_column_view_icon" />
          </Col>
          <Col className="home_article_second_column_writer_name_and_views">{`${list?.[0]?.staff_profile?.name} | ${formatted_date}`}</Col>
          <Col>
            <Button className="exposing_fake_news_first_column_button">
              {t("fact-check")}
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default HomeArticleSecondColumn;
