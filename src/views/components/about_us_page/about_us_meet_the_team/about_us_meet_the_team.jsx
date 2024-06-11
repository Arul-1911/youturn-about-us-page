import React, { useState } from "react";
import "../../../../styles/about_us_styles/about_us_meet_the_team.css";
import {
  expand_team_members_data,
  medical_team_members_data,
} from "../about_us_meet_the_team/about_us_team_data/people_data.js";

function About_us_meet_the_team() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [selectedMedicalMember, setSelectedMedicalMember] = useState(null);

  const handleMemberClick = (member) => {
    setSelectedMember((prevMember) => (prevMember === member ? null : member));
  };

  const handleMedicalMemberClick = (member) => {
    setSelectedMedicalMember((prevMember) =>
      prevMember === member ? null : member
    );
  };

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
            {expand_team_members_data.map((person, index) => (
              <div
                className="about_us_meet_the_team_members_card"
                key={index}
                onClick={() => handleMemberClick(person)}
              >
                <div className="profile_pic">
                  <img src={person.image_url} alt={person.name} />
                </div>
                <div className="member_details">
                  <div className="member_name">{person.name}</div>
                  <div className="member_position">{person.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* members details card meet the team */}

        {selectedMember && (
          <div className="about_us_selected_member_details">
            <div className="selected_members_left_container">
              <div className="member_details_heading_container">
                <h3 className="selected_member_details_heading">
                  {selectedMember.name} || {selectedMember.position}
                </h3>
              </div>

              <div className="member_details_description_container">
                <p className="selected_member_description">
                  {selectedMember.description}
                </p>
              </div>

              {selectedMember.links && (
                <div className="member_links">
                  <h3 className="member_links_heading">social media</h3>
                  {selectedMember.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={link.logo}
                        alt={link.type}
                        className="social_media_logo"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="members_img_right_container">
              <img
                src={selectedMember.image_url}
                alt={selectedMember.name}
                className="members_img_right_container_img"
              />
            </div>
          </div>
        )}

        <p className="about_us_medical_team_members">Medical Experts</p>

        <div className="about_us_meet_the_medical_team_members">
          <div className="about_us_meet_the_medical_team_members_card_container">
            {medical_team_members_data.map((person, index) => (
              <div
                className="about_us_meet_the_medical_team_members_card"
                key={index}
                onClick={() => handleMedicalMemberClick(person)}
              >
                <div className="profile_pic">
                  <img src={person.image_url} alt={person.name} />
                </div>
                <div className="member_details">
                  <div className="member_name">{person.name}</div>
                  <div className="member_position">{person.destination}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* medical team members data */}

        {selectedMedicalMember && (
          <div className="about_us_selected_medical_member_details">
            <div className="selected_members_left_container">
              <div className="member_details_heading_container">
                <h3 className="selected_member_details_heading">
                  {selectedMedicalMember.name} ||{" "}
                  {selectedMedicalMember.position}
                </h3>
              </div>

              <div className="member_details_description_container">
                <p className="selected_member_description">
                  {selectedMedicalMember.description}
                </p>
              </div>

              {selectedMedicalMember.links && (
                <div className="member_links">
                  <h3 className="member_links_heading">social media</h3>
                  {selectedMedicalMember.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={link.logo}
                        alt={link.type}
                        className="social_media_logo"
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="members_img_right_container">
              <img
                src={selectedMedicalMember.image_url}
                alt={selectedMedicalMember.name}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About_us_meet_the_team;
