import React from "react";
import { DATA_JOURNAL,TECHNOLOGY_IMAGE } from "@src/helpers/image_constants";
import '../../../../styles/about_us_styles/about_us_carry_out.css';

function About_us_carry_out() {
  return (
    <>
      <div className="about_us_carry_out_container">
        <div className="about_us_carry_out_title">
          <h1>How do we carry out Fact Check?</h1>
        </div>
        {/*cards conatainer */}
        <div className="about_us_carry_out_cards_container">
          {/* card1 */}
          <div className="about_us_carry_out_card_1">
            <div className="carry_out_card_1_image">
              <img
                src={TECHNOLOGY_IMAGE}
                alt=""
                className="carry_out_card_1_image_1"
              />
            </div>
            <div className="carry_out_card_1_desc">
              <div className="card_1_desc_title">Technology</div>
              <div className="card_1_desc_para">
                We use various tools like reverse image search, a key feature
                that helps find original image information, with which we check
                the source of the information – including the hosting website
                and date posted.
              </div>
            </div>
          </div>

          {/* card2 */}
          <div className="about_us_carry_out_card_2">
            <div className="carry_out_card_2_image">
              <img src={DATA_JOURNAL} className="carry_out_card_1_image_2" />
            </div>
            <div className="carry_out_card_2_desc">
              <div className="card_2_desc_title">Data Journalism</div>
              <div className="card_2_desc_para">
                Our Journalist team is constantly looking for strong proof and
                actively looks for evidence to support the verified news before
                labeling it as True, Fake, Misleading and Sarcasm. This final
                outcome is backed up by actual data gathered by reaching out to
                the authentic sources or documents.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About_us_carry_out;
