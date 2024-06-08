import { Button } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const HomeUserContributionColumnThree = () => {
  const { t } = useTranslation()
  return (
    <div className='user_contributed_story_column_container'>
      <div className='user_contributed_story_column_box'>
        <h6 className='become_member_content'>
          {t("become_member_content")}
        </h6>
        <h1 className='empower_truth_tag'>
          {t("empower_truth")}
        </h1>
        <Button className='become_a_member_button' type='primary'>
          {t("become_a_member")}
        </Button>
      </div>
    </div>
  )
}

export default HomeUserContributionColumnThree
