import * as React from "react"
import {graphql, useStaticQuery } from "gatsby"
import {Jumbo} from "../components/Jumbo"
import Seo from "../components/seo"
import {Products} from '../components/Products'

const IndexPage = () => {
  
   const data = useStaticQuery(graphql `
  query GET_DATA{
    allSite {
    edges {
      node {
        siteMetadata { 
          description
        }
      }
    }
  }
  allStripePrice {
    edges {
      node {
        unit_amount
        product {
          metadata {
            description
            img
            wear
          }
          name
        }
        id
      }
    }
  }
  }
    `)

  return (
  <>
    {console.log(data)}
    <Seo title="Home" />
    <Jumbo description={data.allSite.edges[0].node.siteMetadata.description}/>
    <Products products={data.allStripePrice.edges} />
  </>
)}

export default IndexPage
