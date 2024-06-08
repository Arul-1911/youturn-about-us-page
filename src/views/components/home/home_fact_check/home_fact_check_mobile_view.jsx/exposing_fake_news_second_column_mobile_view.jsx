import { useDynamicSelector } from "@src/services/redux";
import { Col, Row } from "antd";
import moment from "moment";
import React from "react";

const ExposingFakeNewsSecondColumnMobileView = (props) => {
  const { list } = props;
  const { items: fact_check_list, loading: fact_check_list_loading } =
    useDynamicSelector("get_fact_check_list");
  const formatted_date = moment(list?.created_date_time).format("MMMM Do YYYY");

  return (
    <Row className="exposing_fake_news_mobile_view_container">
      <Col className="exposing_fake_news_mobile_view_first_col">
        <img
          className="exposing_fake_news_mobile_view_first_col_img"
          src={list?.thumbnail_img}
        />
      </Col>
      <Col className="exposing_fake_news_mobile_view_second_col">
        <text className="exposing_fake_news_mobile_view_title">
          {list?.title}
        </text>
        <text className="exposing_fake_news_mobile_view_author_name">{`${list?.staff_profile?.name} | ${formatted_date}`}</text>
      </Col>
    </Row>
  );
};

export default ExposingFakeNewsSecondColumnMobileView;
