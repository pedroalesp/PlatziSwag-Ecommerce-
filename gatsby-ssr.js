/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react'
import Layout from'./src/components/layout'
import {GlobalStyles} from './src/styles/index'
import {CartProvider} from './src/context'

export const wrapPageElement = ({element}) => (
   
   <>
    <CartProvider>
         <GlobalStyles/>
        <Layout>{element}</Layout>
    </CartProvider>
    </>

)


