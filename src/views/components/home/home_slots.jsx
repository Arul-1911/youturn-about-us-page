import { retrieve_item } from "@src/helpers/cryptos";
import { useAPIRequest } from "@src/helpers/hooks";
import { get_slot_list_query } from "@src/services/graphql/graphql_home";
import { useDynamicSelector } from "@src/services/redux";
import React, { useEffect } from "react";
import HomeSlotCard from "./home_slot_card";
import HomeSlotCardSkeleton from "./home_slot_card_skeleton";
import { Col, Row } from "antd";
import HomeIfcnLogoAndContent from "./home_ifcn_logo_and_content";
import HomeSlotsInMobile from "./home_slots_in_mobile";
import { SIGNATORY } from "@src/helpers/image_constants";

const HomeSlots = () => {
  const language = retrieve_item("language");

  const { items: slot_list, loading: slot_list_loading } =
    useDynamicSelector("get_slot_list");

  let home_slot_list_request = useAPIRequest(
    "get_slot_list",
    get_slot_list_query
  );

  useEffect(() => {
    get_slot_list();
  }, []);

  const get_slot_list = () => {
    home_slot_list_request({ language_id: language?.id }, true);
  };

  const click_read_more = (type, perma_link) => {
    // if (type != "" && type === "article") {
    //   history.push(`${ROUTES.SINGLE_ARTICLE_PAGE}/${perma_link}`);
    // } else if ((type != "" && type === "fact-check") || type === "fact_check") {
    //   history.push(`${ROUTES.SINGLE_FACT_CHECK}/${perma_link}`);
    // }
  };

  return (
    <div className="home_slots_content_container">
      <div className="hide_content_in_desktop">
        <HomeSlotsInMobile
          slot_list={slot_list}
          slot_list_loading={slot_list_loading}
        />
      </div>
      <div className="home_slots_background_container">
        <div className="home_slots_background_image_container">
          <img
            className="signatory_logo"
            src={SIGNATORY}
            width={"130px"}
          // onClick={on_click_ifcn_logo}
          />
        </div>
      </div>

      {/* <div className="home_ifcn_logo_and_content">
        </div> */}
      <div className="slots_card_wrapper">
        <HomeIfcnLogoAndContent />

        {slot_list_loading ? (
          <>
            <HomeSlotCardSkeleton />
            <HomeSlotCardSkeleton />
            <HomeSlotCardSkeleton />
          </>
        ) : (
          <HomeSlotCard slot_list={slot_list} />
        )}
      </div>
    </div>
  );
};

export default HomeSlots;
