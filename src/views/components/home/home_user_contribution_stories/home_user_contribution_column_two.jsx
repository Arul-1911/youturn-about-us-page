import { Col, Row } from 'antd'
import React from 'react'
import TopContributors from './top_contributors';
import { date_format } from '@src/helpers/functions';
import Title from '@src/views/ui/title/title';

const HomeUserContributionColumnTwo = ({ user_contribution_list }) => {
  const UserContributionCard = (props) => {
    const {
      thumbnail_img,
      published_date_time,
      title,
      height,
      sub_title,
      user_profile,
      view_count,
      loading,
      perma_link,
      img_height,
      img_width,
    } = props;
    return (
      <div className='home_user_contribution_card_container'>
        <img src={thumbnail_img} className='home_user_contribution_image' />
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "10px" }}>
          <h6 className="home_user_contribution_two_profile">
            {`${user_profile?.name} | ${date_format(published_date_time)}`}
          </h6>
          <h6 className="home_user_contribution_two_title">
            {title}
          </h6>
        </div>
      </div>
    )
  }

  return (
    <div className='home_user_contribute_second_column_container'>
      <TopContributors />
      <div className='home_user_contribution_second_card_container'>
        {user_contribution_list?.map((contribution) => {
          return (
            <UserContributionCard {...contribution} />
          )
        })}
      </div>
    </div>
  )
}

export default HomeUserContributionColumnTwo
