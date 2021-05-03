import React, {useContext} from 'react'
import {Link} from 'gatsby'
import {CartContext} from '../context'
import {Button, StyledCart} from '../styles/components'
import priceFormat from '../utils/priceFormat'

const Cart = () => {

    const {cart} = useContext(CartContext)

    return (
        <StyledCart>
            <h2>Purchase Cart</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    {cart.map( item => {
                        return (
                        <tr key={item.sku}>
                            <td>
                                <img src={item.metadata.img} alt={item.name} /> {item.name}
                            </td>
                            <td>
                                USD {priceFormat(item.unit_amount)}
                            </td>
                            <td>
                                {item.quantity}
                            </td>
                            <td>
                                {priceFormat(item.unit_amount * item.quantity)}
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <nav>
                <div>
                    <h3>Subtotal: </h3>
                    <small>Total: </small>
                </div>
                <div>
                <Link>
                    <Button type='outline' >Go back</Button>
                </Link>
                    <Button>Purchase</Button>
                </div>
            </nav>
        </StyledCart>
    )
}

export default Cart 