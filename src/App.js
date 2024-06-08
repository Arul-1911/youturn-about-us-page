import React from "react";
import { Router } from "@src/route/router";
import { language } from "@src/helpers/constants";
import "react-multi-carousel/lib/styles.css";
import { store_item } from "./helpers/cryptos";
import About_us from "./views/components/about_us_page/about_us";

function App() {
  store_item("language", {
    name: "english",
    id: language?.english_id,
    key: "en",
  });
  return <Router />;
  // return (
  //   <>
  //   <About_us/>
  //   </>
  // )
}

export default App;
