import React from "react";
import ExposingFakeNewsFirstColumnMobileView from "./exposing_fake_news_first_column_mobile_view";
import ExposingFakeNewsSecondColumnMobileView from "./exposing_fake_news_second_column_mobile_view";
import { useDynamicSelector } from "@src/services/redux";
import ExposingFakeNewsTitleContent from "../home_fact_check_desktop_view.jsx/exposing_fake_news_title_content";
import ExposingFakeNewsButtonMobileView from "./exposing_fake_news_button_mobile_view";

const HomeFactCheckMobileView = () => {
  const { items: fact_check_list, loading: fact_check_list_loading } =
    useDynamicSelector("get_fact_check_list");
  const sliced_fact_check_list = fact_check_list?.slice(2, 5);

  return (
    <div className="home_fact_check_mobile_view">
      <ExposingFakeNewsTitleContent />
      <ExposingFakeNewsFirstColumnMobileView list={fact_check_list} />
      <div className="exposing_fake_news_mobile_view_wrapper">
        {sliced_fact_check_list?.map((list) => (
          <ExposingFakeNewsSecondColumnMobileView list={list} />
        ))}
      </div>
      <ExposingFakeNewsButtonMobileView />
    </div>
  );
};

export default HomeFactCheckMobileView;
