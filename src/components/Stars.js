import React, {useState} from 'react'

import {SelectStars} from '../styles/components'

const Stars = () => {
    const [star, setStar] = useState(5)

    return (
        <SelectStars selected={star}>
            <span  role='img' aria-label='emoji' onClick={() => setStar(1) } >★</span>
            <span  role='img' aria-label='emoji' onClick={() => setStar(2) } >★</span>
            <span  role='img' aria-label='emoji' onClick={() => setStar(3) } >★</span>
            <span  role='img' aria-label='emoji' onClick={() => setStar(4) } >★</span>
            <span  role='img' aria-label='emoji' onClick={() => setStar(5) } >★</span>
        </SelectStars>
    )
}
export default Stars