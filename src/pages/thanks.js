import React from 'react'
import {Link} from 'gatsby'

import Seo from "../components/seo"

import {Purchase, Button} from '../styles/components'

 const thanks = () =>  {
    return (
        <>
            <Seo title='Successfull Purchase'/> 
             <Purchase>
            <h2>Successfull Purchase!</h2>
            <p>Hope you enjoy your products, wear it  with proud 
            <span role='img' aria-label='emoji'>😎</span></p>
            <p>See you soon! <span role='img' aria-label='emoji'>💚</span></p>
            <Link to='/'>
            <Button>Go back to the catalog</Button>
            </Link>
            </Purchase>
        </>
    )
}

export default thanks

