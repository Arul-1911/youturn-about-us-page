import { retrieve_item } from "@src/helpers/cryptos";
import { useAPIRequest } from "@src/helpers/hooks";
import { ROUTES } from "@src/route/my_routes";
import {
  get_top_contributor_list_query,
  get_user_contribution_list_query,
} from "@src/services/graphql/graphql_home";
import { useDynamicSelector } from "@src/services/redux";
import React, { useEffect } from "react";
import HomeUserContributionColumnOne from "./home_user_contribution_stories/home_user_contribution_column_one";
import HomeUserContributionColumnTwo from "./home_user_contribution_stories/home_user_contribution_column_two";
import HomeUserContributionColumnThree from "./home_user_contribution_stories/home_user_contribution_column_three";
import HomeUserContributionMobileView from "./home_user_contribution_stories/home_user_contribution_mobile_view";
import HomeUserContributionButton from "./home_user_contribution_stories/home_user_contribution_button";
import ExposingFakeNewsButtonMobileView from "./home_fact_check/home_fact_check_mobile_view.jsx/exposing_fake_news_button_mobile_view";

const HomeUserContributions = () => {
  const language = retrieve_item("language");

  const {
    items: user_contribution_list,
    loading: user_contribution_list_loading,
  } = useDynamicSelector("get_user_contribution_list");
  console.log("user_contribution_list");

  const { items: top_contributor_list, loading: top_contributor_list_loading } =
    useDynamicSelector("get_top_contributor_list");
  console.log("top_contributor_list", top_contributor_list);

  let home_user_contribution_list = useAPIRequest(
    "get_user_contribution_list",
    get_user_contribution_list_query
  );
  let home_top_user_contributor_list = useAPIRequest(
    "get_top_contributor_list",
    get_top_contributor_list_query
  );

  useEffect(() => {
    get_user_contribution_list();
    get_top_contributor_list();
  }, []);

  const get_user_contribution_list = () => {
    home_user_contribution_list(
      { language_id: language?.id || "ea83e859-ce26-4086-9e85-ec40f5dbe4f0" },
      true
    );
  };
  const get_top_contributor_list = () => {
    home_top_user_contributor_list(
      { language_id: language?.id || "ea83e859-ce26-4086-9e85-ec40f5dbe4f0" },
      true
    );
  };

  const click_read_more = (type, perma_link) => {
    // if (type != "" && type === "article") {
    //   history.push(`${ROUTES.SINGLE_ARTICLE_PAGE}/${perma_link}`);
    // } else if ((type != "" && type === "fact-check") || type === "fact_check") {
    //   history.push(`${ROUTES.SINGLE_FACT_CHECK}/${perma_link}`);
    // }
  };

  const get_user_profile = (contributor) => {
    // const queryParams = new URLSearchParams();

    // if (contributor?.user_profile_id) {
    //   queryParams.set("user_profile", contributor.user_profile_id);
    // }
    // queryParams.set("type", "fact_check");

    // history.push({
    //   pathname: `/author/${contributor.name}`,
    //   search: `?${queryParams.toString()}`,
    // });
  };

  return (
    <React.Fragment>
      {/* Desktop devices components */}
      <div className="user_home_contribution_desktop_container">
        <div className="user_contribute_stories_main_container">
          <HomeUserContributionColumnOne value={user_contribution_list?.[0]} />
          <HomeUserContributionColumnTwo
            user_contribution_list={user_contribution_list?.slice(1, 5)}
          />
          <HomeUserContributionColumnThree />
        </div>
        <div className="user_contribute_stories_main_container_footer">
          <HomeUserContributionButton />
        </div>
      </div>

      {/* Mobile devices components */}
      <div className="home_user_contribution_mobile_view_main_container">
        <HomeUserContributionMobileView
          user_contribution_list={user_contribution_list?.slice(1, 5)}
        />
        <ExposingFakeNewsButtonMobileView />
      </div>
      <div className="home_user_contribution_mobile_view_main_container without_padding_member_content">
        <HomeUserContributionColumnThree />
      </div>
    </React.Fragment>
  );
};

export default HomeUserContributions;
