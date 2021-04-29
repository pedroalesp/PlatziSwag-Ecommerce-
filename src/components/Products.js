import React from 'react'

import {StyledProducts} from '../styles/components'
import {Link} from 'gatsby'
import formatprice from '../utils/priceFormat'

export const Products = ({products}) => {
    return (
        <StyledProducts>
            <h2>Catalog</h2>
            <section>
            {
                products.map(({node}) => {
                    const price = formatprice(node.unit_amount)
                    return (
                        <article key={node.id}>
                            <img src={node.product.metadata.img} alt={node.product.name}/>
                            <p>{node.product.name}</p>
                            <small>USD {price}</small>
                            <Link to={`/${node.id}`} >Shop now <span role='img' aria-label='emoji'>🛒</span> </Link>
                        </article>
                    )
                })
            }
            </section>
        </StyledProducts>
    )
}