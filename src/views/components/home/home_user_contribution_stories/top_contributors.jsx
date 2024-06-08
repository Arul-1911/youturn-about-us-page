import { USER_PROFILE } from '@src/helpers/image_constants';
import { useDynamicSelector } from '@src/services/redux';
import React from 'react'
import { useTranslation } from 'react-i18next';

const TopContributors = () => {
    const { t } = useTranslation()
    const { items: top_contributor_list, loading: top_contributor_list_loading } =
        useDynamicSelector("get_top_contributor_list");

    return (
        <div className='top_contributor_main_container'>
            <h1 className='top_contribute_title'>
                {t('top_contributors')}
            </h1>
            <div className='top_contributor_container'>
                {top_contributor_list?.slice(0, 5)?.map((contributor) => {
                    return (
                        <img src={contributor?.url || USER_PROFILE} className='top_contributor_profile' />
                    )
                })}
            </div>
        </div>
    )
}

export default TopContributors
