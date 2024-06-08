import { FOOTER_LOGO_ICON } from '@src/helpers/image_constants'
import moment from 'moment'
import React from 'react'

const FooterMobileViewThirdColumn = () => {
    const get_year = moment().year()
    return (
        <div className='footer_mobile_third_column_container'>
            <img src={FOOTER_LOGO_ICON} className='footer_first_column_footer_logo_image' />
            <div className='copy_right_container'>
                <h4 className='copy_right_text'>
                    ©Copyright {get_year} All Rights Reserved
                </h4>
            </div>
        </div>
    )
}

export default FooterMobileViewThirdColumn
