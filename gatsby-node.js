const path = require('path')

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions
    const productTemplate = path.resolve(`src/templates/ProductView.js`)
    const result = await graphql(`query GET_RESULTS {
        allStripePrice {
          edges {
            node {
              id
              unit_amount
              product {
                metadata {
                  description
                  img
                  wear
                }
                name
              }
            }
          }
        }
      }
      `)

      if (result.errors) {
          throw result.errors
      }

      result.data.allStripePrice.edges.forEach( ({node}) => {
        createPage({
            path: `${node.id}`,
            component: productTemplate,
            context: node
        }) 
      });
}