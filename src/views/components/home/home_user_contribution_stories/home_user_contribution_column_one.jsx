import React from 'react'
import { useTranslation } from 'react-i18next'
import ReactHtmlParser from "html-react-parser";

import { LuEye } from 'react-icons/lu';
import { AiFillClockCircle } from 'react-icons/ai';
import { READING_TAG } from '@src/helpers/image_constants';
import { date_format, format_views_count, split_content } from '@src/helpers/functions';


const HomeUserContributionColumnOne = ({ value }) => {
  const { t } = useTranslation()
  return (
    <div className='home_user_contributed_story_first_column_main_container'>
      <h1 className='user_contributed_module_title'>
        {t("user_contributed_stories")}
      </h1>
      <div className='user_contributed_story_container border-shadow '>
        <img src={value?.thumbnail_img} className='user_contributed_story_container_image' />
        {/* Title */}
        <div className='user_contributed_story_text_container'>
          <h3 className='home_user_contribute_title'>
            {value?.title}
          </h3>
          <text className='home_user_contribute_subtitle'>
            {split_content(value?.subtitle || value?.content, "_", 40)}
          </text>
          <div className='display-flex flex-column user_contributed_story_container_footer home_user_contribute_container'>
            <div className='display-flex flex-row justify-content-between'>
              <h6 className='contribute_user_name'>
                {value?.user_profile?.name}
              </h6>
              <div className='display-flex flex-row g-1  align-center home_user_contribute_footer' >
                <LuEye color='red' className='view-count-icon' />
                <text className='view-count-tag'>
                  {format_views_count(value?.views)}
                </text>
              </div>
            </div>
            <div className='display-flex flex-row justify-content-between'>
              <h6 className='user_contribute_publish_time'>
                {date_format(value?.published_date_time)}
              </h6>
              <div className='display-flex flex-row g-1 align-center home_user_contribute_footer' >
                <AiFillClockCircle color='gray' className='reading-time-icon' />
                <text className='time-tag'>
                  {value?.reading_time} {t("min")}
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
    </div>
  )
}

export default HomeUserContributionColumnOne
