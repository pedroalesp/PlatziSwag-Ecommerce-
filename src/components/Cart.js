import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'gatsby'
import {CartContext} from '../context'
import {Button, StyledCart} from '../styles/components'
import priceFormat from '../utils/priceFormat'

const Cart = () => {

    const {cart} = useContext(CartContext)
    const [total, setTotal] = useState(0)
    const [stripe, setStripe] = useState()

    const getTotal = () => (
       setTotal(
        cart.reduce( (acc, current) => acc + current.unit_amount * current.quantity, 0 )
       ) 
    )

    useEffect( () => {
        setStripe(window.Stripe(process.env.STRIPE_PK))
        getTotal()
    }, [] )

    const handleSubmit = async (e) => {
        e.preventDefault()

        const {error} = await stripe.redirectToCheckout({
            lineItems: cart.map( ({sku, quantity}) => ({ price: sku, quantity}) ),
            mode: 'payment',
            successUrl: process.env.SUCCESS_REDIRECT,
            cancelUrl: process.env.CANCEL_REDIRECT
        })

        if (error) {
            throw new Error(error.message) 
        }
    } 

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
                    <h3>Total: USD {priceFormat(total)}</h3>
                </div>
                <div>
                <Link>
                    <Button type='outline' >Go back</Button>
                </Link>
                    <Button onClick={handleSubmit} disabled={cart.length === 0} >Purchase</Button>
                </div>
            </nav>
        </StyledCart>
    )
}

export default Cart 