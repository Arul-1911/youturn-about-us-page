import { Col, Row, Skeleton } from "antd";
import React from "react";

const FactCheckMiddleCardSkeleton = () => {
  return (
    <div className="exposing_fake_news_second_section">
      <Skeleton.Input
        className="exposing_fake_news_second_column_image"
        active
      />
      <Row className="fact_check_middle_card_title_wrapper">
        <Skeleton.Input
          className="fact_check_middle_card_title_skeleton"
          active
        />
        <Skeleton.Input
          className="fact_check_middle_card_title_skeleton"
          active
        />
      </Row>
      <Row className="fact_check_middle_card_sub_title_wrapper">
        <Skeleton.Input
          className="fact_check_middle_card_sub_title_skeleton"
          active
        />
        <Skeleton.Input
          className="fact_check_middle_card_sub_title_skeleton"
          active
        />
        <Skeleton.Input
          className="fact_check_middle_card_sub_title_skeleton"
          active
        />
      </Row>
      <Row className="exposing_fake_news_second_column_details_container">
        <Col className="exposing_fake_news_details_skeleton">
          <Skeleton.Input className="square_skeleton" active />
          <Skeleton.Input className="square_skeleton" active />
        </Col>
        <Col className="exposing_fake_news_details_skeleton">
          <Skeleton.Input className="square_skeleton" active />
          <Skeleton.Input className="square_skeleton" active />
        </Col>
      </Row>
      <Row className="fact_check_continue_reading_wrapper">
        <Skeleton.Input
          className="fact_check_middle_card_sub_title_skeleton"
          active
        />
      </Row>
    </div>
  );
};

export default FactCheckMiddleCardSkeleton;
