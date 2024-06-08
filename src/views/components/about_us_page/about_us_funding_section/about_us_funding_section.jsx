import React from "react";
import "../../../../styles/about_us_styles/about_us_funding_section.css";
import { LAUNCH_IMAGE } from "@src/helpers/image_constants";

function About_us_funding_section() {
  return (
    <>
      {/* main_container */}
      <div className="about_us_funding_container">
        {/* col-1 */}
        <div className="about_us_funding_desc_container">
          <div className="about_us_funding_desc_heading">
            <h1 className="about_us_funding_desc_h1_heading">Funding</h1>
          </div>

          <div className="about_us_funding_desc_para_container">
            <p className="about_us_funding_desc_para">
              YouTurn was an independent organization that was funded by
              Proprietor and Founder till June 2022. Currently, donation amount
              from readers, grant, advertisement revenue, article and video
              views are the sources of our income. We also accept and greatly
              appreciate donations from anyone who believes in us and wants to
              be part of our journey.
            </p>
          </div>

          <div className="about_us_funding_desc_btn_container">
            <button className="about_us_funding_desc_btn">
              Finance Statements 2020
              <span>
                <img src={LAUNCH_IMAGE} />
              </span>
            </button>
            <button className="about_us_funding_desc_btn">
              Finance Statements 2021
              <span>
                <img src={LAUNCH_IMAGE} />
              </span>
            </button>
            <button className="about_us_funding_desc_btn">
              Finance Statements 2022
              <span>
                <img src={LAUNCH_IMAGE} />
              </span>
            </button>
          </div>
        </div>

        {/* col-2 */}

        {/* <div className="about_us_funding_box_container"> */}
        <div className="about_us_funding_box_card">
          {/* header title */}
          <div className="about_us_funding_box_card_title">
            <p>
              Do you think it is important for You Turn to verify the accuracy
              of the content it posts? It is our goal to present you information
              that is both true and unbiased in terms of political viewpoint. It
              would mean a lot to us if you decided to back us. Give, and help
              it become the people's digital media!
            </p>
          </div>
          {/* header hash tag */}
          <div className="about_us_funding_box_card_hashtag">
            <span className="funding_box_card_hash">#</span>
            <span>FightAgainstFakeNews</span>
          </div>

          {/* make a samll contribution */}
          <div className="about_us_funding_box_card_contribution_container">
            <div className="about_us_funding_box_card_small_contribution">
              <h2>Make a small contribution...</h2>
            </div>
            <div className="about_us_funding_box_card_contribution_note">
              <p>Note: currently we accept only INR donations</p>
            </div>
          </div>
          {/* enter amount container */}
          <div className="about_us_funding_box_card_amount_container">
            {/* buttons */}
            <div className="about_us_funding_box_card_amount_container_btns">
              <button className="about_us_funding_box_card_amount_btn">
                &#x20b9;199
              </button>
              <button className="about_us_funding_box_card_amount_btn">
                &#x20b9;599
              </button>
              <button className="about_us_funding_box_card_amount_btn">
                &#x20b9;999
              </button>
            </div>

            <p className="about_us_funding_or">or</p>

            {/* enter amount input and btn */}
            <div className="about_us_funding_box_amount_input_container">
              <div className="about_us_funding_box_amount_input">
                <input type="text" placeholder="Enter amount" />
              </div>
              <div className="about_us_funding_box_amount_donate_btn">
                <button className="about_us_donate_btn">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* mobile version of fake news container */}
      {/* <div className="fight_fake_news_container_mob"> */}

      {/* <div className="fight_fake_news_container_mob">
          <div className="fight_fake_news_div">
            <p className="fight_fake_news_hash">#</p>
            <p className="fight_fake_news_hash_val">FightAgainst FakeNews</p>
          </div>
          <p className="fight_fake_news_head">
            Do you think it is important for You Turn to verify the accuracy of
            the content it posts? It is our goal to present you information that
            is both true and unbiased. It would mean a lot to us if you decided
            to donate. Help us become the people's digital media!
          </p>
          <div>
            <p style={{ color: "white", textAlign: "center", marginTop:'30px', marginBottom:"-8px" }}>Make a small contribution</p>
            <input
              type="text"
              placeholder="Enter Amount.."
              className="figh_fake_news_input_mob"
            />
          </div>
          <div className="fight_fake_news_second_div">
            <button className="figh_fake_news_button_mob">Donate</button>
            <p className="figh_fake_news_note_mob">
              Note: currently we accept only INR donations
            </p>
          </div>
        </div> */}

      <div className="about_us_column_3_container_mobile">
        <div className="about_us_column_3_container_middle">
          <div className="about_us_column_3_conatainer_middle_1">
            <span className="about_us_middle_hash">#</span>
          </div>
          <div className="about_us_column_3_conatainer_middle_2">
            <span className="about_us_middle_title">FightAgainst</span>
            <span className="about_us_middle_title">FakeNews</span>
          </div>
        </div>

        <div className="about_us_column_3_container_title">
          <p>
            Do you think it is important for You Turn to verify the accuracy of
            the content it posts? It is our goal to present you information that
            is both true and unbiased. It would mean a lot to us if you decided
            to donate. Help us become the people's digital media!
          </p>
        </div>

        <div className="about_us_column_3_container_middle_mobile">
          <div className="about_us_column_3_container_middle_mobile_desc">
            Make a small contribution...
          </div>
        </div>

        <div className="about_us_column_3_input_mobile">
          <input
            type="text"
            placeholder="Enter Amount"
            className="about_us_column_3_input_mobile_input"
          />
        </div>

        <div className="about_us_column_3_container_footer">
          <div className="about_us_column_3_container_footer_button">
            <button className="column_3_btn_text">Donate</button>
          </div>
          <div className="about_us_column_3_container_footer_note">
            <p>Note:currently we accept only INR donations</p>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default About_us_funding_section;
