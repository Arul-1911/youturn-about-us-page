import { Button, Divider, Row } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const HomeUserContributionButton = () => {
  const { t } = useTranslation()
  return (
    <Row className="exposing_fake_news_divider_container">
      <Row className="exposing_fake_news_divider_wrapper">
        <Divider className="exposing_fake_news_divider">
          <Button className="exposing_fake_news_button">{t("see_all_normal")}</Button>
        </Divider>
      </Row>
    </Row>
  );
};

export default HomeUserContributionButton;

