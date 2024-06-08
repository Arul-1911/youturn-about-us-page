import { Col, Row } from "antd";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";

const ExposingFakeNewsImageComponent = (props) => {
  const { list } = props;
  const { t } = useTranslation();

  const formatted_date = moment(list?.created_date_time).format("MMMM Do YYYY");
  return (
    <Row className="exposing_fake_news_image_component_container">
      <img
        className="exposing_fake_news_third_column_image"
        src={list?.thumbnail_img}
      />
      <Col className="exposing_fake_news_third_column">
        <Row className="exposing_fake_news_third_column_first_row">
          <text className="exposing_fake_news_third_column_title">
            {list?.title}
          </text>
        </Row>
        <Row className="exposing_fake_news_third_column_second_row">
          <text className="exposing_fake_news_third_column_name">
            {t(`${list?.staff_profile?.name} | ${formatted_date}`)}
          </text>
        </Row>
      </Col>
    </Row>
  );
};

export default ExposingFakeNewsImageComponent;
