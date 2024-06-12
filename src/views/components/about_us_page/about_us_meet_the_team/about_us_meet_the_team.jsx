import React from "react";
import Meet_the_team from "./Meet_the_team";
import Medical_team from "./Medical_team";
import "../../../../styles/about_us_styles/about_us_meet_the_team.css";

function About_us_meet_the_team() {
  return (
    <div>
      <div className="meet_the_team_container">
        <div className="meet_the_team_head">
          <div className="meet_the_team_heading">
            <p>Meet the Team</p>
          </div>
          <div className="meet_the_team_right_content">
            <p className="our_mission_rightmeet_the_team_right_para">
              We currently have a team of 10 members who are not a part of any
              political parties nor inclined towards any organizations.
            </p>
            <p className="our_mission_rightmeet_the_team_right_para">
              It’s the idea of our Founder, Mr. Vignesh to start the
              organization and he is the advisor of the Organization. The
              founder has given complete freedom of decision authority to the
              Editorial team in order to provide unbiased fact-checks. The
              editorial team is led by Ms.Gowthami Ramasamy who has the
              exclusive editorial control.
            </p>
            <p className="our_mission_rightmeet_the_team_right_para">
              Our Sub-Editors write articles and publish them once it is
              verified by our Editor. Our team of Research Analysts research and
              fact check the claims and provide inputs. Multimedia Specialists
              take care of the memes and video section. Sub-editors, Research
              Analysts, and Multimedia Specialists report to the Editor.
            </p>
          </div>
        </div>
        <Meet_the_team />
        <div className="medical_members">
          <div
            style={{ marginTop: "50px" }}
            className="medical_expert_container"
          >
            <p className="medical_expert_heading">Medical experts</p>
          </div>
          <Medical_team />
        </div>
      </div>
    </div>
  );
}

export default About_us_meet_the_team;
