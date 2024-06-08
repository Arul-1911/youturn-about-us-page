
import { Button, Divider, Row } from "antd";
import React from "react";

const ExposingFakeNewsButton = () => {
  return (
    <Row className="exposing_fake_news_divider_container">
      <Row className="exposing_fake_news_divider_wrapper">
        <Divider className="exposing_fake_news_divider">
          <Button className="exposing_fake_news_button">See All</Button>
        </Divider>
      </Row>
    </Row>
  );
};

export default ExposingFakeNewsButton;
