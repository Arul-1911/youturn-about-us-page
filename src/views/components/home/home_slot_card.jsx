import { box_shadow } from "@src/helpers/constants";
import { retrieve_item } from "@src/helpers/cryptos";
import { date_format, format_views_count, split_content } from "@src/helpers/functions";
import { ARROW_GIF_ICON, READING_TAG } from "@src/helpers/image_constants";
import { Col, Row, Skeleton } from "antd";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import { AiFillClockCircle } from "react-icons/ai";
import { LuEye } from "react-icons/lu";

const HomeSlotCard = (props) => {
  const { slot_list } = props;
  const { t } = useTranslation();
  let language = retrieve_item("language");
  let is_english = language?.name === "english"

  const SlotCard = (props) => {
    const { thumbnail_img, title, subtitle, content, staff_profile, views, published_date_time, reading_time } = props?.article || props.fact_check
    return (
      <div className="slot_main_container">
        {/* <div > */}
        <img src={thumbnail_img} className="slot_image_box image_hover_effect" />
        {/* </div> */}
        <div className="slot_card_details">
          <h3 className={is_english ? "slot_card_title_en" : "slot_card_title"}>
            {title || ""}
          </h3>
          <text className={is_english ? "slot_card_sub_title_en" : "slot_card_sub_title"}>
            {split_content(subtitle || content) || ""}
          </text>
          <div className="slot_card_footer_content">
            <div className='display-flex flex-row justify-content-between'>
              <h6 className='contribute_user_name'>
                {staff_profile?.name}
              </h6>
              <div className='display-flex flex-row g-1  align-center home_user_contribute_footer' >
                <LuEye color='red' className='view-count-icon' />
                <text className='view-count-tag'>
                  {format_views_count(views)}
                </text>
              </div>
            </div>
            <div className='display-flex flex-row justify-content-between'>
              <h6 className='user_contribute_publish_time'>
                {date_format(new Date(Number(published_date_time)))}
              </h6>
              <div className='display-flex flex-row g-1 align-center home_user_contribute_footer' >
                <AiFillClockCircle color='gray' className='reading-time-icon' />
                <text className='time-tag'>
                  {reading_time} {t("min")}
                </text>
              </div>
            </div>
          </div>
          <div className='display-flex flex-row g-1 user_contributed_story_container_footer' style={{ alignItems: "center" }}>
            <h4 className='continue_reading_text'>
              {t("continue_reading")}
            </h4>
            <img src={READING_TAG} style={{ height: "30px" }} />
          </div>
        </div>
      </div>
    )
  }


  return (
    <>
      {/* {slot_list?.map((item, index) => (
        <Row
          className="home_slot_card_container"
          style={{ boxShadow: box_shadow }}
        >
          <img
            src={
              item?.fact_check?.id
                ? item?.fact_check?.thumbnail_img
                : item?.article?.thumbnail_img
            }
            className="home_slot_card_image"
          />
          <Col className="home_slot_card_title_wrapper">
            <text className="home_slot_card_title_skeleton">
              {item?.fact_check?.id
                ? item?.fact_check?.title
                : item?.article?.title}
            </text>
          </Col>
          <Col className="home_slot_card_content_wrapper">
            <text className="home_slot_card_content_skeleton">
              {split_content(
                item?.fact_check?.id
                  ? item?.fact_check?.content
                  : item?.article?.content,
                15
              )}
            </text>
          </Col>
          <Col className="home_slot_card_views_wrapper">
            <div>
              <text className="home_slot_card_views_skeleton">
                {item?.fact_check?.id
                  ? item?.fact_check?.staff_profile?.name
                  : item?.article?.staff_profile?.name}
              </text>
              <div>
                <text className="home_slot_card_views_skeleton">
                  {moment(
                    item?.fact_check?.id
                      ? item?.fact_check?.created_date_time
                      : item?.article?.created_date_time
                  ).format("MMM DD, YYYY")}
                </text>
              </div>
            </div>

            <div>
              <div className="views_container">
                <div style={{ alignItems: "center" }}>
                  <LuEye color="red" />
                </div>
                <text className="home_slot_card_views">
                  {item?.fact_check?.id
                    ? item?.fact_check?.views
                    : item?.article?.views}
                </text>
              </div>
              <div>
                <AiFillClockCircle />
                <text className="home_slot_card_views_skeleton">
                  {item?.fact_check?.id
                    ? `${item?.fact_check?.reading_time} ${t("min")} `
                    : `${item?.article?.reading_time} ${t("min")} `}
                </text>
              </div>
            </div>
          </Col>
          <Col>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2px",
              }}
            >
              <h4 className="continue_reading_text">{t("continue_reading")}</h4>
              <img src={READING_TAG} style={{ height: "30px" }} />
            </div>
          </Col>
        </Row>
      ))} */}
      {slot_list?.map((list) => {
        return (
          <SlotCard {...list} />
        )
      })}

    </>
  );
};

export default HomeSlotCard;
