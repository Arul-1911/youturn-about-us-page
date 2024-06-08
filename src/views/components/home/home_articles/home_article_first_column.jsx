import React from "react";
import HomeArticleSkeleton from "./home_article_skeleton";
import { useDynamicSelector } from "@src/services/redux";
import HomeArticlePrimaryCard from "./home_article_primary_card";
import HomeArticlePrimaryTitle from "./home_article_primary_title";

const HomeArticleFirstColumn = () => {
  const { loading: article_list_loading } =
    useDynamicSelector("get_article_list");
  return (
    <div className="home_article_first_column">
      <HomeArticlePrimaryTitle />
      {!article_list_loading ? (
        <HomeArticlePrimaryCard />
      ) : (
        <HomeArticleSkeleton />
      )}
    </div>
  );
};

export default HomeArticleFirstColumn;
