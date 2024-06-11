import { HINDU_TAMIL_MEME } from "@src/helpers/image_constants";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function AwardsList() {
  const award_list = [
    { url: HINDU_TAMIL_MEME },
    { url: HINDU_TAMIL_MEME },
    { url: HINDU_TAMIL_MEME },
    { url: HINDU_TAMIL_MEME },
    { url: HINDU_TAMIL_MEME },
    { url: HINDU_TAMIL_MEME },
    { url: HINDU_TAMIL_MEME },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  return (
    <div style={{ marginTop: "25px" }}>
      <Carousel responsive={responsive}>
        {award_list.map((item) => (
          <img src={item.url} alt="" className="award_list_image" />
        ))}
      </Carousel>
    </div>
  );
}

export default AwardsList;
