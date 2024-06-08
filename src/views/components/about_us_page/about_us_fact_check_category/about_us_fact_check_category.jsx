import React from "react";
import "../../../../styles/about_us_styles/about_us_fact_check_category.css";
import {
  ABOUT_FACEBOOK_IMG,
  ABOUT_INSTAGRAM_IMG,
  ABOUT_TWITTER_IMG,
  ABOUT_YOUTUBE_IMG,
  ELLIPSE,
  FAKE_IMG,
  FALSE_IMG,
  MIS_LEADING_IMG,
  MIX_IMG,
  SARCASAM_IMG,
  TRUE_IMG,
} from "@src/helpers/image_constants";

function About_us_fact_check_category() {
  return (
    <>
      <div className="fact_check_heading_container">
        <h2 className="fact_check_heading">Fact Check Categorisations</h2>
      </div>

      <div className="fact_check_container">
        {/* col-1 */}

        <div className="fact_check_col_1">
          <div className="fact_check_col_1_column_1_container">
            <div className="fact_check_col_1_first">
              <div>
                <img src={TRUE_IMG} alt="" className="row_img" />
              </div>
              <div className="row_1_img_desc">
                <p className="fact_check_desc">
                  True symbol in an article says that the information claimed is
                  completely true
                </p>
              </div>
            </div>

            <div className="fact_check_col_1_first">
              <div>
                <img src={MIX_IMG} alt="" className="row_img" />
              </div>
              <div className="row_2_img_desc">
                <p className="fact_check_desc">
                  Mix symbol indicates that the information claimed has a mix of
                  both true and false information/data.
                </p>
              </div>
            </div>

            <div className="fact_check_col_1_first">
              <div>
                <img src={MIS_LEADING_IMG} alt="" className="row_img" />
              </div>
              <div className="row_3_img_desc">
                <p className="fact_check_desc">
                  Misleading symbol in an article states that the claimed
                  information is partly true but shared out of context,
                  sometimes with an intention to create a wrong perception.
                </p>
              </div>
            </div>
          </div>

          {/* inner-col-2 */}
          <div className="fact_check_col_1_column_2_container">
            <div className="fact_check_col_1_second">
              <div className="fact_check_col_1_first">
                <div>
                  <img src={FAKE_IMG} alt="" className="row_img" />
                </div>
                <div className="row_1_img_desc">
                  <p className="fact_check_desc">
                    Fake symbol denotes that the claimed information (photo or
                    video) is digitally manipulated/altered to make it look
                    authentic, when it is not.
                  </p>
                </div>
              </div>

              <div className="fact_check_col_1_first">
                <div>
                  <img src={SARCASAM_IMG} alt="" className="row_img" />
                </div>
                <div className="row_2_img_desc">
                  <p className="fact_check_desc">
                    Sarcasm symbol says that the claim was
                    created/published/shared with a sarcastic intention and with
                    bit of humour.
                  </p>
                </div>
              </div>

              <div className="fact_check_col_1_first">
                <div>
                  <img src={FALSE_IMG} alt="" className="row_img" />
                </div>
                <div className="row_3_img_desc">
                  <p className="fact_check_desc">
                    False seal denote that the claimed information is false.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* col-2 */}
        {/* <div className="fact_check_col_2">
          <div className="about_us_fact_check_ellipseimg_container">
            <img src={ELLIPSE} alt="" className="ellipse_img" />
          </div>
        </div> */}

        {/* <div className="about_us_fact_check_ellipse_images_container">
          <img src={ABOUT_FACEBOOK_IMG} className="ellipse_facebook_img" />
          <img src={ABOUT_TWITTER_IMG} className="ellipse_twitter_img" />
          <div className="ellipse_social_media_description">
            <p className="ellipse_socila_media_heading">Dont't miss anything</p>
            <p className="ellipse_social_media_body_desc">
              Follow us on our social media!
            </p>
          </div>
          <img src={ABOUT_INSTAGRAM_IMG} className="ellipse_instagram_img" />
          <img src={ABOUT_YOUTUBE_IMG} className="ellipse_youtube_img" />
        </div> */}

        {/* new ellipse circle in css code */}

        <div className="share_circle">
          <img src={ABOUT_FACEBOOK_IMG} alt="" className="circle_share_one" />
          <img src={ABOUT_TWITTER_IMG} alt="" className="circle_share_two" />
          <div className="circle_share_text">
            <p className="circle_share_text_heading">Don’t miss anything</p>
            <p className="circle_share_text_description">
              Follow us on our social media!
            </p>
          </div>
          <img
            src={ABOUT_INSTAGRAM_IMG}
            alt=""
            className="circle_share_three"
          />
          <img src={ABOUT_YOUTUBE_IMG} alt="" className="circle_share_four" />
        </div>
      </div>
    </>
  );
}

export default About_us_fact_check_category;
