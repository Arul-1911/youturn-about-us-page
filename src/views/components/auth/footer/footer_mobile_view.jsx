import React from 'react'
import FooterMobileViewFirstColumn from './footer_mobile_view/footer_mobile_view_first_column'
import FooterMobileViewSecondColumn from './footer_mobile_view/footer_mobile_view_second_column'
import FooterMobileViewThirdColumn from './footer_mobile_view/footer_mobile_view_third_column'

const FooterMobileView = () => {
    return (
        <div className='footer_mobile_view_container'>
            <FooterMobileViewFirstColumn />
            <FooterMobileViewSecondColumn />
            <FooterMobileViewThirdColumn />
        </div>
    )
}

export default FooterMobileView
