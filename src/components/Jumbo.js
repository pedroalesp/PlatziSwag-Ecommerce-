import React from 'react'

import {StyledJumbo} from '../styles/components'
import {Image} from './image'

export const Jumbo = ({description}) => {
return (
    <StyledJumbo>
    <div>
        <h2>Get the best products!</h2>
        <small>{description}</small>
    </div>
    <Image name='icon' alt='icon'/>
    </StyledJumbo>
 )
} 