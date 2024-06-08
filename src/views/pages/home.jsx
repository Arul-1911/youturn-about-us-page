import React, { useEffect, useState } from "react";
import { useDynamicSelector } from "@src/services/redux";
import { request_captcha_query } from "@src/services/graphql/request_captcha";
import { useAPIRequest } from "@src/helpers/hooks";
import HomeSlots from "@src/views/components/home/home_slots";
import HomeUserContributions from "@src/views/components/home/home_user_contributions";
import HomeFactChecks from "../components/home/home_fact_checks";
import HomeVideos from "../components/home/home_videos";
import HomeAwards from "../components/home/home_awards";
import HomeArticles from "../components/home/home_articles/home_articles";
import HomeArticleSkeleton from "../components/home/home_articles/home_article_skeleton";
import HomeDonation from "../components/home/home_donation.jsx/home_donation";

const Home = () => {
  const [screen_width, set_screen_width] = useState(window.innerWidth);
  let get_captcha_request = useAPIRequest(
    "request_captcha",
    request_captcha_query
  );

  useEffect(() => {
    console.log("screen_width", screen_width);
    set_screen_width(window.innerWidth);
  }, [screen_width]);

  // useEffect(() => {
  //   get_captcha_request({}, true);
  // }, []);

  const { captcha } = useDynamicSelector("request_captcha");
  console.log("captcha", captcha);

  const load_data = () => {
    get_captcha_request({}, true);
  };

  return (
    <div>
      <HomeSlots />
      <HomeFactChecks />
      <HomeDonation />
      <HomeArticles />
      <HomeVideos />
      <HomeUserContributions />
      <HomeAwards />
      {/* <h2>Home Page</h2>
      <p>Welcome to the Home page!</p> */}
      {/* <HomeAwards />
      <button onClick={load_data}>Load</button>
      <div>{screen_width}</div> */}

      {/* <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <HomeArticleSkeleton />
      </div> */}
      {/* <HomeVideos /> */}
    </div>
  );
};

export default Home;
