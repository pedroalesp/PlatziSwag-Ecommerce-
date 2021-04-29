import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {GatsbyImage} from 'gatsby-plugin-image'

export const Image =  ({name}) => {

const data = useStaticQuery(graphql`
   query GET_IMAGE {
    icon: file(relativePath: {eq: "icon.png"}) {
      childImageSharp {
        gatsbyImageData (layout: FULL_WIDTH,
        placeholder: BLURRED)
      }
    }
  }`)
//console.log(data[name])

  return (
    <GatsbyImage image={data[name].childImageSharp.gatsbyImageData} />
  )
}
