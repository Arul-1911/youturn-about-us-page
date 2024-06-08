import { Col, Row, Skeleton } from "antd";
import React from "react";

const HomeSlotCardSkeleton = () => {
  return (
    <Row className="home_slot_card_container">
      <Skeleton.Input active className="home_slot_card_image_skeleton" />
      <Col className="home_slot_card_title_wrapper">
        <Skeleton.Input active className="home_slot_card_title_skeleton" />
      </Col>
      <Col className="home_slot_card_content_wrapper">
        <Skeleton.Input active className="home_slot_card_content_skeleton" />
      </Col>
      <Col className="home_slot_card_views_wrapper">
        <Row>
          <Skeleton.Input active className="home_slot_card_views_skeleton" />
          <Skeleton.Input active className="home_slot_card_views_skeleton" />
        </Row>
        <Row>
          <Skeleton.Input active className="home_slot_card_views_skeleton" />
          <Skeleton.Input active className="home_slot_card_views_skeleton" />
        </Row>
      </Col>
      <Skeleton.Input active className="home_slot_card_read_more_skeleton" />
    </Row>
  );
};

export default HomeSlotCardSkeleton;
