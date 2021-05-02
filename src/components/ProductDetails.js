import React, {useState} from 'react'

import priceFormat from '../utils/priceFormat'
import {
    Tag,
    SizeButton,
    QtyButton,
    QtySelect,
    SizeSelect,
    ColorSelect,
    ColorButton,
    Button,
    StyledProductDetail
} from '../styles/components'
import  {SEO, Stars} from "./Index"

const ProductDetails = ({unit_amount, sku: id, product: {metadata, name}}) => {
   
    const [size, setSize] = useState(2)
    const [qty, setQty] = useState(1)
    const [colors, setColors] = useState(1)
    const formatedPrice = priceFormat(unit_amount)
   
  return (<StyledProductDetail>
        <SEO title={name} />
        <img src={metadata.img} alt={name}/>
        <div>
            <Tag>Popular</Tag>
            <h2>{name}</h2>
            <b>USD {formatedPrice} </b>
            <Stars />
            <small>{metadata.description}</small>

        {
            metadata.wear  &&(
                metadata.color ? (
                    <ColorSelect selected={colors}>
                        <ColorButton onClick={() => setColors(1)}>Blue</ColorButton>
                        <ColorButton onClick={() => setColors(2)}>Gray</ColorButton>
                        <ColorButton onClick={() => setColors(3)}>Purple</ColorButton>
                    </ColorSelect>                    
                ) : null
            )
        }
                {
            metadata.wear && (
                <SizeSelect selected={size}>
                    <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
                    <SizeButton onClick={() => setSize(2)}>S</SizeButton>
                    <SizeButton onClick={() => setSize(3)}>M</SizeButton>
                    <SizeButton onClick={() => setSize(4)}>L</SizeButton>
                </SizeSelect>
            )
        }
       
        <p>Quantity:</p>
            <QtySelect>
                <button onClick={() => (qty > 1 ? setQty(qty-1) : null ) }>-</button>
                <input type='text' disable value={qty}/>
                <button onClick={() => setQty(qty + 1)} >+</button>
            </QtySelect>
        <Button>Add To Cart</Button>
        </div>

    </StyledProductDetail>)
}

export default ProductDetails
