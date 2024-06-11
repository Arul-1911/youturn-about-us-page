import React from "react";
import "react-multi-carousel/lib/styles.css";
import { BBC_APPRECIATION_IMG } from "@src/helpers/image_constants.js";
import AwardsList from "./AwardList";
import '../../../../styles/about_us_styles/about_us_pc_awards.css';

function About_us_pc_awards_couresel() {
  return (
    <div className="award_list_container">
      <div className="award_list_div">
        <div className="award_list_one">
          <p className="medical_expert_heading">Awards and recognition</p>
          <p className="award_list_one_description">
            BBC News Tamil | November 2018
          </p>
          <p className="award_list_one_content">
            “ போலிச் செய்திகள் பரவுவது தொடர்பாக இந்தியாவில் கவலை
            அதிகமாகியுள்ளது. வதந்திகளையும், போலிச் செய்திகளையும் தடுப்பதை
            நோக்கமாக கொண்டு, சில பத்திரிகையாளர்கள் சேவைகளை தொடங்கியுள்ளனர்.
            அத்தகைய நோக்கத்தில் தமிழ் இளைஞர்கள் சிலரின் முயற்சியை விளக்கும்
            காணொளி. ”
          </p>
          <a href="" className="award_list_one_link">
            Continue Reading {">"}
          </a>
        </div>
        <div className="award_list_two">
          <img src={BBC_APPRECIATION_IMG} alt="" className="award_list_two_img" />
        </div>
      </div>
      <AwardsList />
      <div className="become_a_member_div">
        <p className="become_a_member_heading">Join us today</p>
        <p className="become_a_member_description">
          Support free and independent journalism
        </p>
        <button className="become_a_member_button">Become a Member</button>
      </div>
    </div>
  );

}

export default About_us_pc_awards_couresel;
