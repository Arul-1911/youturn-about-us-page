import React from 'react'
import { split_title } from '../../../helpers/functions'

const Title = ({ children }) => {
    console.log("value", children);
    return (
        <h3 className='title'>
            {/* {split_title(children.toString())} */}
            {children}
        </h3>
    )
}

export default Title
