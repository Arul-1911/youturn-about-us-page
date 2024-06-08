import { retrieve_item } from "@src/helpers/cryptos";
import { useAPIRequest } from "@src/helpers/hooks";
import { ROUTES } from "@src/route/my_routes";
import { get_fact_check_list_query } from "@src/services/graphql/graphql_home";
import { useDynamicSelector } from "@src/services/redux";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExposingFakeNewsFirstColumnSkeleton from "./home_fact_check/home_fact_check_loading/exposing_fake_news_first_column_skeleton";
import ExposingFakeNewsFirstColumn from "./home_fact_check/home_fact_check_desktop_view.jsx/exposing_fake_news_first_column";
import FactCheckMiddleCardSkeleton from "./home_fact_check/home_fact_check_loading/fact_check_middle_card_skeleton";
import { Col, Row } from "antd";
import ExposingFakeNewsSecondColumn from "./home_fact_check/home_fact_check_desktop_view.jsx/exposing_fake_news_second_column";
import ExposingFakeNewsThirdColumn from "./home_fact_check/home_fact_check_desktop_view.jsx/exposing_fake_news_third_column";
import ExposingFakeNewsButton from "./home_fact_check/home_fact_check_desktop_view.jsx/exposing_fake_news_button";
import HomeFactCheckMobileView from "./home_fact_check/home_fact_check_mobile_view.jsx/home_fact_check_mobile_view";

const HomeFactChecks = () => {
  const current_language = retrieve_item("language");
  const navigate = useNavigate();

  let fact_check_list_request = useAPIRequest(
    "get_fact_check_list",
    get_fact_check_list_query
  );

  const { items: fact_check_list, loading: fact_check_list_loading } =
    useDynamicSelector("get_fact_check_list");
  const fact_check = fact_check_list?.slice(0, 1);
  console.log("fact_check", fact_check);

  useEffect(() => {
    get_fact_check_list();
  }, []);

  const get_fact_check_list = () => {
    fact_check_list_request(
      {
        page_limit: 6,
        page_number: 1,
        json: {
          language_id: current_language?.id,
        },
      },
      true
    );
  };

  const handle_redirect = (perma_link) => {
    // if (type === "article") {
    //   navigate(`${ROUTES.SINGLE_ARTICLE}/${perma_link}.html`);
    // } else {
    //   navigate(`${ROUTES.SINGLE_FACT_CHECK}/${perma_link}.html`);
    // }
  };

  return (
    <div>
      <div className="exposing_fake_news_container">
        <Row className="exposing_fake_news_wrapper">
          {fact_check_list_loading ? (
            <ExposingFakeNewsFirstColumnSkeleton />
          ) : (
            <ExposingFakeNewsFirstColumn list={fact_check_list} />
          )}
          {fact_check_list_loading ? (
            <FactCheckMiddleCardSkeleton />
          ) : (
            <ExposingFakeNewsSecondColumn />
          )}
          <Col className="exposing_fake_news_third_section">
            <ExposingFakeNewsThirdColumn />
          </Col>
        </Row>
      </div>
      <ExposingFakeNewsButton />
      <div className="home_fact_check_mobile_view_wrapper">
        <HomeFactCheckMobileView />
      </div>
    </div>
  );
};

export default HomeFactChecks;
