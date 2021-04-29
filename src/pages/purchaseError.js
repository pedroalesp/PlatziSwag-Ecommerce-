import React from 'react'
import {Link} from 'gatsby'

import SEO from "../components/seo"
import {Purchase, Button} from '../styles/components'

 const purchaseError = () =>  {
    return (
    <>
                 <SEO title='Purchase Error'/> 
        <Purchase>
            <h2>Sorry! Your purchase can't being complete <span role='img' aria-label='emoji'>😥</span></h2>
                <p>Seems like an error ocurred in the process
                     <span role='img' aria-label='emoji'>🤔</span></p>
                 <p>Do you wanna try again? </p>
            <div>
                <Link to='/'>
                 <Button>Go back to the checkout again</Button>
                </Link>
                <Link to='/'>
                 <Button>Go back to the catalog</Button>
                </Link>
           </div>
        </Purchase>
    </>
    )
}

export default purchaseError

