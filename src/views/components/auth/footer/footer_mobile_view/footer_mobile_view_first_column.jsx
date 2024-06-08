import { FACEBOOK_FILED_LOGO, INSTAGRAM_FILED_LOGO, LINKEDIN_FILED_LOGO, SHARE_CHAT_FILED_LOGO, TELEGRAM_FILED_LOGO, TWITTER_FILED_LOGO, WHATSAPP_FILED_LOGO, YOUTUBE_FILED_LOGO } from '@src/helpers/image_constants'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FooterMobileViewFirstColumn = () => {
    const { t } = useTranslation()
    let logos = [
        { icon: FACEBOOK_FILED_LOGO, url: 'https://www.facebook.com/youturn.in/' },
        { icon: WHATSAPP_FILED_LOGO, url: "https://api.whatsapp.com/send?phone=916369748351&text=Hi%20You%20Turn!" },
        { icon: TWITTER_FILED_LOGO, url: "https://twitter.com/youturn_in" },
        { icon: INSTAGRAM_FILED_LOGO, url: "https://www.instagram.com/youturn.media/" },
        { icon: YOUTUBE_FILED_LOGO, url: "https://www.youtube.com/channel/UCCLsLUlxvfdnRwG8_Uh40Ew" },
        { icon: LINKEDIN_FILED_LOGO, url: "https://in.linkedin.com/in/youturn32017" },
        { icon: TELEGRAM_FILED_LOGO, url: "https://in.linkedin.com/in/youturn32017" },
        { icon: SHARE_CHAT_FILED_LOGO, url: "https://sharechat.com/profile/youturn_in?referer=tagProfileSearchPage" },
    ]
    const handle_redirect = (url) => {
        window.open(url)
    }
    return (
        <div className='social_media_container'>
            <h4 className='social_media_tag'>
                {t("follow_us_on_social_media")}
            </h4>
            <div className='footer_third_column_image_container'>
                {logos?.map((logo) => {
                    return (
                        <div className='image_box' onClick={() => handle_redirect(logo.url)}>
                            <img src={logo.icon} className='footer-logo' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default FooterMobileViewFirstColumn
