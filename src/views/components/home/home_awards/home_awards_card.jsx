import { split_tamil_english_words } from "@src/helpers/functions";
import { STAR_IMAGE } from "@src/helpers/image_constants";
import React, { useEffect } from "react";

const HomeAwardsCard = (props) => {
  const { award } = props;

  return (
    <>
      <div className="home_awards_card_image_div">
        <img src={award?.thumbnail_img} className="home_awards_card_image" />
        <div className="home_awards_card_image_overlay_content">
          <img
            className="award_card_content_image"
            visible={false}
            preview={false}
            src={STAR_IMAGE}
          />
          <h6 className="home_awards_card_image_overlay_text">
            {split_tamil_english_words(award?.title, "", 5)}
          </h6>
        </div>
      </div>
    </>
  );
};

export default HomeAwardsCard;
