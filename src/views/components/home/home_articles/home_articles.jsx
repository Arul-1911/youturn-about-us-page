import { retrieve_item } from "@src/helpers/cryptos";
import { useAPIRequest } from "@src/helpers/hooks";
import { ROUTES } from "@src/route/my_routes";
import { get_article_list_query } from "@src/services/graphql/graphql_home";
import { useDynamicSelector } from "@src/services/redux";
import React, { useEffect } from "react";
import HomeArticleFirstColumn from "./home_article_first_column";
import { Col, Row } from "antd";
import HomeArticleTrendingCard from "./home_article_trending_card";
import ExposingFakeNewsFirstColumn from "../home_fact_check/home_fact_check_desktop_view.jsx/exposing_fake_news_first_column";
import HomeArticleSecondColumn from "./home_article_second_column";
import ExposingFakeNewsButton from "../home_fact_check/home_fact_check_desktop_view.jsx/exposing_fake_news_button";
import ExposingFakeNewsFirstColumnMobileView from "../home_fact_check/home_fact_check_mobile_view.jsx/exposing_fake_news_first_column_mobile_view";

const HomeArticles = () => {
  const language = retrieve_item("language");
  const { items: article_list } = useDynamicSelector("get_article_list");

  const article_data = article_list?.slice(1, 2);

  let home_article_list_request = useAPIRequest(
    "get_article_list",
    get_article_list_query
  );

  useEffect(() => {
    get_article_list();
  }, []);

  const get_article_list = () => {
    home_article_list_request(
      {
        page_number: 1,
        page_limit: 6,
        json: {
          language_id: language?.id,
        },
      },
      true
    );
  };

  const read_article_details = (perma_link) => {
    // history.push(`${ROUTES.SINGLE_ARTICLE_PAGE}/${perma_link}.html`);
  };

  return (
    <>
      <div className="home_article_first_column_container">
        <div className="home_article_first_column_wrapper">
          <HomeArticleFirstColumn />

          <div className="home_article_second_column">
            <HomeArticleSecondColumn list={article_data} />
          </div>
        </div>
      </div>

      <div className="home_article_row_container">
        <div className="home_article_row_wrapper">
          {article_list?.slice(2, 7).map((article, index) => (
            <HomeArticleTrendingCard key={index} list={article} />
          ))}
        </div>
      </div>
      <ExposingFakeNewsButton />
    </>
  );
};

export default HomeArticles;
