import { IFCN_IMAGE, LAUNCH_IMAGE } from "@src/helpers/image_constants";
import React from "react";
import "../../../../styles/about_us_styles/about_us_ifcn_certified.css";

function About_us_ifcn_certified() {
  return (
    <>
      <div className="about_us_ifcn_certified_container">
        {/* coloumn-1 */}

        <div className="about_us_ifcn_certifed_column_1">
          <img
            src={IFCN_IMAGE}
            alt=""
            className="about_us_ifcn_certfied_image"
          />
        </div>
        {/* coloumn-2 */}

        <div className="about_us_ifcn_certifed_column_2">
          <div className="about_us_ifcn_heading">
            <h2>IFCN Certified</h2>
          </div>

          <div className="about_us_ifcn_description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea com. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea com...
          </div>
        </div>
        {/* coloumn-3 */}

        <div className="about_us_ifcn_certifed_column_3">
          <div className="about_us_column_3_container">
            <div className="about_us_column_3_container_title">
              <p>
                Do you think it is important for You Turn to verify the accuracy
                of the content it posts? It is our goal to present you
                information that is both true and unbiased. It would mean a lot
                to us if you decided to donate. Help us become the people's
                digital media!
              </p>
            </div>

            <div className="about_us_column_3_container_middle">
              <div className="about_us_column_3_conatainer_middle_1">
                <span className="about_us_middle_hash">#</span>
              </div>
              <div className="about_us_column_3_conatainer_middle_2">
                <span className="about_us_middle_title">FightAgainst</span>
                <span className="about_us_middle_title">FakeNews</span>
              </div>
            </div>

            <div className="about_us_column_3_container_footer">
              <div className="about_us_column_3_container_footer_button">
                <button className="column_3_btn_text">Donate Now</button>
              </div>
              <div className="about_us_column_3_container_footer_note">
                <p>Note:currently we accept only INR donations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view of coloumn 2 */}

      <div className="about_us_ifcn_certifed_column_2_mobile">
        <div className="about_us_ifcn_heading">
          <h2>IFCN Certification</h2>
        </div>
        <div>
          <div className="about_us_img_mobile_container">
            <img
              src={IFCN_IMAGE}
              alt=""
              className="about_us_ifcn_certfied_image"
            />
          </div>
        </div>
        <div className="about_us_ifcn_description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea com. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea com...
        </div>
        <div className="about_us_mobile_ifcn_certificate_button">
          <button className="ifcn_certificate_btn">
            IFCN Certificate
            <span>
              <img src={LAUNCH_IMAGE} alt="" className="launch_img_span" />
            </span>
          </button>
        </div>
      </div>

      {/* // policies */}

      <div className="about_us_ifcn_polices_container">
        <div>
          <h1 className="about_us_ifcn_policies_heading">Policies</h1>
        </div>

        <div className="about_us_ifcn_polices_btn_container">
          <div className="about_us_ifcn_policies_buttons">
            <button className="correction_policy">
              Correction Policy
              <span>
                <img src={LAUNCH_IMAGE} alt="" className="launch_img_span" />
              </span>
            </button>
            <button className="political_involvement_policy">
              Political Involvement Policy
              <span>
                <img src={LAUNCH_IMAGE} alt="" className="launch_img_span" />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* column 3 mobile view  */}

   
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
      
    </>
  );
}

export default About_us_ifcn_certified;
