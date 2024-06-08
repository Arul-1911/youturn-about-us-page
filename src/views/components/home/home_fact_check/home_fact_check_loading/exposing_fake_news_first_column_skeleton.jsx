import { Col, Row, Skeleton } from "antd";
import React from "react";

const ExposingFakeNewsFirstColumnSkeleton = () => {
  return (
    <Row>
      <Skeleton.Input
        className="exposing_fake_news_first_column_skeleton"
        active
      />
      <Col className="exposing_fake_news_first_column_details_skeleton">
        <Skeleton.Input
          className="exposing_fake_news_first_column_inside_skeleton"
          active
        />
      </Col>
    </Row>
  );
};

export default ExposingFakeNewsFirstColumnSkeleton;
