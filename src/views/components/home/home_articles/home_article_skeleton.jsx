import { Card, Row, Skeleton } from "antd";
import React from "react";

const HomeArticleSkeleton = ({ loading }) => {
  return (
    <div className="home_article_card_skeleton_container">
      <div className="home_article_card_skeleton_thumbnail">
        <Skeleton.Input
          className="home_article_card_skeleton_thumbnail"
          active
        />
      </div>
      <div className="home_article_card_details_skeleton_wrapper">
        <Skeleton.Input className="home_article_card_skeleton_title" active />
        <Skeleton.Input
          className="home_article_card_skeleton_subtitle"
          active
        />
        <div className="home_article_card_skeleton_author_details_wrapper">
          <Skeleton.Input
            className="home_article_card_skeleton_author_details"
            active
            size="small"
          />
          <Skeleton.Input
            className="home_article_card_skeleton_author_details"
            active
            size="small"
          />
        </div>
        <div className="home_article_card_skeleton_author_details_wrapper">
          <Skeleton.Input
            className="home_article_card_skeleton_author_details"
            active
            size="small"
          />
          <Skeleton.Input
            className="home_article_card_skeleton_author_details"
            active
            size="small"
          />
        </div>
        <Skeleton.Input
          className="home_article_card_skeleton_continue_read"
          active
        />
      </div>
    </div>
  );
};

export default HomeArticleSkeleton;
