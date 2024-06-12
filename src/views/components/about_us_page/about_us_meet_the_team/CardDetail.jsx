import { INSTAGRAM, LINKEDIN, TWITTER } from "@src/helpers/image_constants";
import React from "react";

function CardDetail({ cardItem, divClickedIndex, clickedIndex }) {
  console.log(divClickedIndex, clickedIndex);
  return (
    <div className="team_member_card_detail">
      <div className="team_member_card_container">
        <div className="team_member_card_description">
          <h3 className="person_name">
            {cardItem.name} | {cardItem.position}
          </h3>
          <p className="person_name_desc">{cardItem.description}</p>

          <div className="team_member_card_links">
            {cardItem.links?.length > 0 && (
              <div>
              </div>
            )}
            {cardItem.links?.map((link, i) =>
              link?.type === "instagram" ? (
                <div key={i} className="link_img">
                  <a href={link.url} target="_blank">
                    <img src={INSTAGRAM} alt={link.type} className="link_img" />
                  </a>
                </div>
              ) : link?.type === "twitter" ? (
                <div key={i} className="link_img">
                  <a href={link.url} target="_blank">
                    <img src={TWITTER} alt={link.type} className="link_img" />
                  </a>
                </div>
              ) : link?.type === "linked_in" ? (
                <div key={i} className="link_img">
                  <a href={link.url} target="_blank">
                    <img src={LINKEDIN} alt={link.type} className="link_img" />
                  </a>
                </div>
              ) : null
            )}
          </div>
        </div>
        <div className="team_card_member_image">
          <div className="team_member_container">
            <img
              src={cardItem.image_url}
              alt={cardItem.name}
              className="team_member_image"
            />
            {/* <div className="team_member_description">
              <p className="team_member_name">{cardItem.name}</p>
              <p className="team_member_position">{cardItem.position}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
