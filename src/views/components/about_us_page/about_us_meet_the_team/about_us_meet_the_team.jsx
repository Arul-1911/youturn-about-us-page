import React from "react";
import "../../../../styles/about_us_styles/about_us_meet_the_team.css";
import {
  peopleData,
  medical_members_data,
} from "../about_us_meet_the_team/about_us_team_data/people_data.js";

function About_us_meet_the_team() {
  return (
    <div>
      <div className="about_us_meet_the_team_container">
        <div className="about_us_meet_the_team_header">
          <h2 className="about_us_meet_the_team_heading">Meet the Team</h2>
          <div className="about_us_meet_the_team_description">
            <p>
              We currently have a team of 10 members who are not a part of any
              political parties nor inclined towards any organizations.
            </p>
            <p>
              It’s the idea of our Founder, Mr. Vignesh to start the
              organization and he is the advisor of the Organization. The
              founder has given complete freedom of decision authority to the
              Editorial team in order to provide unbiased fact-checks. The
              editorial team is led by Ms.Gowthami Ramasamy who has the
              exclusive editorial control.
            </p>
            <p>
              Our Sub-Editors write articles and publish them once it is
              verified by our Editor. Our team of Research Analysts research and
              fact check the claims and provide inputs. Multimedia Specialists
              take care of the memes and video section. Sub-editors, Research
              Analysts, and Multimedia Specialists report to the Editor.
            </p>
          </div>
        </div>

        <div className="about_us_meet_the_team_members">
          <div className="about_us_meet_the_team_members_card_container">
            {peopleData.map((person, index) => (
              <div className="about_us_meet_the_team_members_card" key={index}>
                <div className="profile_pic">
                  <img src={person.picture} alt={person.name} />
                </div>
                <div className="member_details">
                  <div className="member_name">{person.name}</div>
                  <div className="member_position">{person.destination}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="about_us_medical_team_members">Medical Experts</p>

        <div className="about_us_meet_the_medical_team_members">
          <div className="about_us_meet_the_medical_team_members_card_container">
            {medical_members_data.map((person, index) => (
              <div
                className="about_us_meet_the_medical_team_members_card"
                key={index}
              >
                <div className="profile_pic">
                  <img src={person.picture} alt={person.name} />
                </div>
                <div className="member_details">
                  <div className="member_name">{person.name}</div>
                  <div className="member_position">{person.destination}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_us_meet_the_team;
