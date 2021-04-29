// import React from 'react'
// import {StaticQuery, graphql} from 'gatsby'
// import {GatsbyImage} from 'gatsby-plugin-image'

// export default function Image ({name})  {
//   return (
//     <StaticQuery query={graphql(`
//     query GET_IMAGE {
//         icon: file(relativePath: {eq: "icon.png"}) {
//           childImageSharp {
//             gatsbyImageData (layout: FULL_WIDTH)
//           }
//         }
//       }
       
//     `)}
    
//     render={data => {
//       console.log(data);
//       return (

//           <GatsbyImage image={data[name].file.childImageSharp.gatsbyImageData} />
//       )
//     }}
//     />
//   )
// }
