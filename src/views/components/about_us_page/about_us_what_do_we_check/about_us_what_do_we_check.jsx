import React from "react";
import "../../../../styles/about_us_styles/about_us_what_do_we_check.css";
import { HEALTH_MEDICINE, MAINSTREAM_MEDIA, POLITICAL_FACT_CHECKING, SOCIAL_MEDIA } from "@src/helpers/image_constants";
import { stay_connect_icon } from "../about_us_meet_the_team/about_us_team_data/people_data";

function About_us_what_do_we_check() {
  return (
    <>
      {/* how do we check */}
      <div className="about_us_what_do_we_check_title">
        <h2>What do we check?</h2>
      </div>
      <div className="about_us_how_do_we_check_container">
        <div className="about_us_how_do_we_check_card_container_1">
          <div className="about_us_card_title">
            <img src={POLITICAL_FACT_CHECKING} alt="" />
          </div>
          <div className="desc">Political fact-checking</div>
        </div>

        <div className="about_us_how_do_we_check_card_container_2">
          <div className="about_us_card_title">
            <img src={HEALTH_MEDICINE} alt="" />
          </div>
          <div className="desc">Health & Medicine</div>
        </div>

        <div className="about_us_how_do_we_check_card_container_3">
          <div className="about_us_card_title">
            <img src={SOCIAL_MEDIA} alt="" />
          </div>
          <div className="desc">Social Media Rumours</div>
        </div>

        <div className="about_us_how_do_we_check_card_container_4">
          <div className="about_us_card_title">
            <img src={MAINSTREAM_MEDIA} alt="" />
          </div>
          <div className="desc">Mainstream media: misinformation/ bias</div>
        </div>
      </div>

      {/* stay connected */}

      <div className="stay_connect_mobile">
        <h5 className="stay_connect_mobile_heading">Stay Connected</h5>
        <div className="stay_connect_items">
          {stay_connect_icon.map((item, INDEX) => (
            <div className="stay_connect_item" key={INDEX}>
              <img src={item.image_url} alt="" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About_us_what_do_we_check;
