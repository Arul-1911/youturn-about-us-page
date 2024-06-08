import { SIGNATORY } from '@src/helpers/image_constants'
import React from 'react'
import FooterSecondColumn from '../footer_second_column'

const FooterMobileViewSecondColumn = () => {
    return (
        <div className='footer_mobile_second_column_container'>
            <div className='quick_access_mobile_container'>
                <FooterSecondColumn />
            </div>
            <div className='footer_first_column_signatory_image_container'>
                <img src={SIGNATORY} className='footer_first_column_signatory_image' />
            </div>

        </div>
    )
}

export default FooterMobileViewSecondColumn
