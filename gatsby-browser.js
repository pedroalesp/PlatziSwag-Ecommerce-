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

