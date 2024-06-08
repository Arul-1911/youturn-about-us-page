import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterSecondColumn = () => {
    const { t } = useTranslation()
    const quick_access = [
        {
            name: t("fact_check"),
            url: "-"
        },
        {
            name: t("awards_and_recognition"),
            url: "-"
        },
        {
            name: t("articles"),
            url: "-"
        },
        {
            name: t("user_contribution"),
            url: "-"
        },
        {
            name: t("about"),
            url: "-"
        },
        {
            name: t("contact"),
            url: "-"
        },
        {
            name: t("privacy_policy"),
            url: "-"
        },
    ]
    return (
        <div className='footer_second_page_column_container'>
            <ul className='quick_access_label_container'>
                <li className='main_header'>
                    {t("quick_access")}
                </li>
                {quick_access.map((quick) => {
                    return (
                        <li className='quick_access_label'>
                            {quick.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FooterSecondColumn
