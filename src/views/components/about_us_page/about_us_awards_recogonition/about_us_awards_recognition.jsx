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
