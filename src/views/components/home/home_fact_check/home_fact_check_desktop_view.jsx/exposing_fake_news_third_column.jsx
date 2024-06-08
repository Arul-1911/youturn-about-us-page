import { useDynamicSelector } from "@src/services/redux";
import { Col, Row } from "antd";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import ExposingFakeNewsImageComponent from "./exposing_fake_news_image_component";

const ExposingFakeNewsThirdColumn = () => {
  const { t } = useTranslation();

  const { items: fact_check_list } = useDynamicSelector("get_fact_check_list");
  const sliced_fact_check_list = fact_check_list?.slice(2, 4);

  return (
    <div className="exposing_fake_news_third_column_container">
      {sliced_fact_check_list?.map((list) => (
        <ExposingFakeNewsImageComponent list={list} />
      ))}
    </div>
  );
};

export default ExposingFakeNewsThirdColumn;
