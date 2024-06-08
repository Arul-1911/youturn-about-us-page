import { FOOTER_LOGO_ICON, SIGNATORY } from '@src/helpers/image_constants'
import React from 'react'

const FooterFirstColumn = () => {
    return (
        <div className='footer_first_column_container'>
            <img src={FOOTER_LOGO_ICON} className='footer_first_column_footer_logo_image' />
            <img src={SIGNATORY} className='footer_first_column_signatory_image' />
        </div>
    )
}

export default FooterFirstColumn
