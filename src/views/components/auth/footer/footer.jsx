import React from 'react'
import FooterFirstColumn from './footer_first_column'
import FooterSecondColumn from './footer_second_column'
import FooterThirdColumn from './footer_third_column'
import FooterMobileView from './footer_mobile_view'

const Footer = () => {
    return (
        <React.Fragment>
            <div className='footer_main_container'>
                <FooterFirstColumn />
                <FooterSecondColumn />
                <FooterThirdColumn />
            </div>
            <FooterMobileView />
        </React.Fragment>
    )
}

export default Footer
