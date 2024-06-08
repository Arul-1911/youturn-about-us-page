import { split_content } from "@src/helpers/functions";
import { Col, Row, Typography } from "antd";
import moment from "moment";
import React from "react";

const HomeArticleTrendingCard = ({ list }) => {
  const formatted_date = moment(
    list?.published_date_time
      ? parseInt(list?.published_date_time)
      : list?.created_date_time
  ).format("MMMM Do YYYY");

  return (
    <Row className="home_article_trending_container">
      <img src={list?.thumbnail_img} className="home_article_trending_image" />

      <Col className="home_article_trending_details_container">
        <div className="home_article_trending_title_container">
          <Typography className="home_trending_title_text">
            {split_content(list?.title, 0, 7)}
          </Typography>
        </div>
        <div className="home_article_trending_author_container">
          <Typography className="home_trending_title_text">
            {`${
              list?.staff_profile?.name ||
              list?.user_profile?.name ||
              "youturn Editorial"
            } | ${formatted_date}`}
          </Typography>
        </div>
      </Col>
    </Row>
  );
};

export default HomeArticleTrendingCard;
