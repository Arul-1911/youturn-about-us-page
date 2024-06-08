import React from "react";
import "../../../../styles/about_us_styles/about_us_awards_recognition.css";
import {
  BBC_APPRECIATION_IMG,
  BBC_IMG_TEXT_LOGO,
  HINDU_TAMIL_MEME,
} from "@src/helpers/image_constants";
import { hindu_meme_data } from "../about_us_meet_the_team/about_us_team_data/people_data";
import Carousel from "react-multi-carousel";


function About_us_awards_recognition() {

   const responsive = {
     mobile: {
       breakpoint: { max: 767, min: 0 },
       items: 1,
     },
   };


  return (
    <>
      {/* pc display container */}
      <div className="about_us_awards_recognition_container">
        {/* top container */}
        <div className="about_us_awards_recognition_top_section">
          <div className="about_us_awards_recognition_top_section_left_column">
            <h1 className="about_us_awards_recognition_top_section_left_column_title">
              Awards and recognition
            </h1>
            <p className="about_us_awards_recognition_top_section_left_column_sub-title">
              BBC News Tamil | November 2018
            </p>
            <p className="about_us_awards_recognition_top_section_left_column_desc">
              “ போலிச் செய்திகள் பரவுவது தொடர்பாக இந்தியாவில் கவலை
              அதிகமாகியுள்ளது. வதந்திகளையும், போலிச் செய்திகளையும் தடுப்பதை
              நோக்கமாக கொண்டு, சில பத்திரிகையாளர்கள் சேவைகளை தொடங்கியுள்ளனர்.
              அத்தகைய நோக்கத்தில் தமிழ் இளைஞர்கள் சிலரின் முயற்சியை விளக்கும்
              காணொளி. ” <br />
            </p>
            <p className="about_us_awards_recognition_continue_reading">
              Continue Reading {">"}
            </p>
          </div>

          <div className="about_us_awards_recognition_top_section_right_column">
            <div className="about_us_awards_recognition_top_section_right_column_img">
              <img src={BBC_APPRECIATION_IMG} />
            </div>
            <div className="about_us_awards_recognition_top_section_right_column_img_text_container">
              <img
                className="about_us_awards_recognition_top_section_right_column_img_text_logo"
                src={BBC_IMG_TEXT_LOGO}
              />

              <div className="about_us_awards_recognition_top_section_right_column_img_text_logo_desc">
                BBC Tamil appreciated our efforts against Fake News in this 2018
                Interview
              </div>
            </div>
          </div>
        </div>

        {/* middle container */}
        {/* <div className="about_us_awards_recognition_middle_section">
          <div className="about_us_awards_recognition_middle_section_card">
            {hindu_meme_data.map((meme, index) => (
              <img src={meme.picture} key={index} className="meme_image" />
            ))}
          </div>
        </div> */}

        {/* footer container */}
        <div className="about_us_awards_recognition_footer_section">
          <div className="about_us_awards_recognition_footer_section_title">
            <p>Join us today</p>
          </div>
          <div className="about_us_awards_recognition_footer_section_sub_title">
            <p>Support free and independent journalism</p>
          </div>
          <div className="about_us_awards_recognition_footer_section_member_btn">
            <button>Become a Member</button>
          </div>
        </div>
      </div>

      
      {/* mobile display couresel */}
      <div className="award_list_container_mob">
        <div className="award_list_div">
          <div className="award_list_one">
            {/* <p className="medical_expert_heading">
              You Turn: Awards and recognition
            </p> */}
          </div>
        </div>
        <Carousel
          responsive={responsive}
          showDots={true}
          removeArrowOnDeviceType={["mobile"]}
        >
          <div className="award_list_two_mob_container">
            <div className="award_list_two_mob">
              <img
                src={BBC_APPRECIATION_IMG}
                alt=""
                className="award_list_two_img"
              />
              <div className="award_list_star_note">
                <img
                  src={BBC_IMG_TEXT_LOGO}
                  alt=""
                  className="awardlist_star_icon"
                />
                <p className="awardlist_star_description">
                  BBC Tamil appreciated our efforts against Fake News in this
                  2018 Interview
                </p>
              </div>
            </div>

            <div className="award_list_two_mob">
              <img
                src={BBC_APPRECIATION_IMG}
                alt=""
                className="award_list_two_img"
              />
              <div className="award_list_star_note">
                <img
                  src={BBC_IMG_TEXT_LOGO}
                  alt=""
                  className="awardlist_star_icon"
                />
                <p className="awardlist_star_description">
                  BBC Tamil appreciated our efforts against Fake News in this
                  2018 Interview
                </p>
              </div>
            </div>
            <div className="award_list_two_mob">
              <img
                src={BBC_APPRECIATION_IMG}
                alt=""
                className="award_list_two_img"
              />
              <div className="award_list_star_note">
                <img
                  src={BBC_IMG_TEXT_LOGO}
                  alt=""
                  className="awardlist_star_icon"
                />
                <p className="awardlist_star_description">
                  BBC Tamil appreciated our efforts against Fake News in this
                  2018 Interview
                </p>
              </div>
            </div>
          </div>
          <div className="award_list_two_mob_container">
            <div className="award_list_two_mob">
              <img
                src={BBC_APPRECIATION_IMG}
                alt=""
                className="award_list_two_img"
              />
              <div className="award_list_star_note">
                <img
                  src={BBC_IMG_TEXT_LOGO}
                  alt=""
                  className="awardlist_star_icon"
                />
                <p className="awardlist_star_description">
                  BBC Tamil appreciated our efforts against Fake News in this
                  2018 Interview
                </p>
              </div>
            </div>

            <div className="award_list_two_mob">
              <img
                src={BBC_APPRECIATION_IMG}
                alt=""
                className="award_list_two_img"
              />
              <div className="award_list_star_note">
                <img
                  src={BBC_IMG_TEXT_LOGO}
                  alt=""
                  className="awardlist_star_icon"
                />
                <p className="awardlist_star_description">
                  BBC Tamil appreciated our efforts against Fake News in this
                  2018 Interview
                </p>
              </div>
            </div>
            <div className="award_list_two_mob">
              <img
                src={BBC_APPRECIATION_IMG}
                alt=""
                className="award_list_two_img"
              />
              <div className="award_list_star_note">
                <img
                  src={BBC_IMG_TEXT_LOGO}
                  alt=""
                  className="awardlist_star_icon"
                />
                <p className="awardlist_star_description">
                  BBC Tamil appreciated our efforts against Fake News in this
                  2018 Interview
                </p>
              </div>
            </div>
          </div>
          <div className="award_list_two_mob_container">
            <div className="award_list_two_mob">
              <img
                src={BBC_APPRECIATION_IMG}
                alt=""
                className="award_list_two_img"
              />
              <div className="award_list_star_note">
                <img
                  src={BBC_IMG_TEXT_LOGO}
                  alt=""
                  className="awardlist_star_icon"
                />
                <p className="awardlist_star_description">
                  BBC Tamil appreciated our efforts against Fake News in this
                  2018 Interview
                </p>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="become_a_member_div">
          <p className="become_a_member_heading">Join us today</p>
          <p className="become_a_member_description">
            Support free and independent journalism
          </p>
          <button className="become_a_member_button">Become a Member</button>
        </div>
      </div>
    </>
  );
}

export default About_us_awards_recognition;
