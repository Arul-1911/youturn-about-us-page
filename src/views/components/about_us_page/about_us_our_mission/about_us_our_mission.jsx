import React from "react";
import { YOUTURN_LOGO } from "@src/helpers/image_constants";
import '../../../../styles/about_us_styles/about_us_our_mission.css'

function About_us_our_mission() {
  return (
    <div>
      <div className="about_us_our_mission_container">

        <div className="about_us_our_mission_first_column">
          <div className="about_us_our_mission_first_row">
            <img src={YOUTURN_LOGO} alt="youturn_logo" className="about_us_our_mission_youturn_logo" />
          </div>
          <div className="about_us_our_mission_second_row">
            <p className="about_us_our_mission_logo_description">
              part of People Educational Awareness Trust – Non-profitable
              education and awareness trust
            </p>
          </div>
        </div>

        <div className="about_us_our_mission_second_column">
          <h2 className="about_us_our_mission_second_column_header">
            Our Mission
          </h2>
          <p className="about_us_our_mission_second_column_paragraph">
            In the “Fake News” era, nuance and neutrality are dead.
            Unfortunately, with digitalization and social media, there is an
            increase in the widespread news either factual or fake making the
            authenticity of the content questionable – readers need a better way
            to find the facts.
            <br /> <br/>
            You Turn is committed to fact-check media content in a transparent
            and unbiased manner. Our goal is to give the audience the truth
            behind the news circulated in various social media outlets. We do
            not have any affiliations or favouritism towards any political,
            religious, or social slant in the news that’s published. We adhere
            to high Social Standards, Ethics, Virtue, and Quality.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About_us_our_mission;
