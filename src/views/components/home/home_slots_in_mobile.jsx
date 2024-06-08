import { retrieve_item } from "@src/helpers/cryptos";
import { split_content } from "@src/helpers/functions";
import { Image, Skeleton } from "antd";
import React, { useRef } from "react";
import Carousel from "react-multi-carousel";

const HomeSlotsInMobile = (props) => {
  const { slot_list, slot_list_loading } = props;
  const language = retrieve_item("language")
  let is_english = language?.name === "english"
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 650 },
      items: 1
    },
    small_tablet: {
      breakpoint: { max: 650, min: 550 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1
    }
  }
  return (
    <React.Fragment>
      <div className="home_page_slots_top_container">
        <h4 className="youturn_presents_title">YouTurn Presents</h4>
        <h3 className="featured_stories_title">Featured Stories</h3>
      </div>
      <div>
        {slot_list?.length > 0 &&
          <Carousel responsive={responsive} arrows={false} showDots={true}>
            {slot_list?.map((item, index) => (
              <div key={index} className="home_slot_mobile_carousel_container">
                {/* {slot_list_loading ? (
                  <Skeleton.Input
                    style={{ width: "100vw", height: "30vh" }}
                    active
                  />
                ) : ( */}
                <div className="home_slot_mobile_image_box">
                  <img
                    className="home_slot_mobile_image"
                    key={index}
                    src={
                      item?.fact_check?.id
                        ? item?.fact_check?.thumbnail_img
                        : item?.article?.thumbnail_img
                    }
                  // onClick={() => on_click_for_top_three_slots(item)}
                  />
                </div>
                <div className="slot_card_box">
                  <h3 className={is_english ? "slot_card_title_en" : "slot_card_title"}>
                    {item?.fact_check?.title || item?.article?.title}
                  </h3>
                </div>
                {/* )} */}
                {/* <div className="home_carousel_card">
                {slot_list_loading ? (
                  <div>
                    <Skeleton.Input active />
                  </div>
                ) : (
                  <div style={{ padding: "3px" }}>
                    <text style={{ fontSize: "14px", color: "#140f2d" }}>
                      {split_content(
                        item?.fact_check?.id
                          ? item?.fact_check?.title
                          : item?.article?.title,
                        0,
                        10
                      )}
                    </text>
                  </div>
                )}
              </div> */}
              </div>
            ))}
          </Carousel>}
      </div>
    </React.Fragment >
  );
};

export default HomeSlotsInMobile;
