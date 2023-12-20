import React from 'react'
import Cart from './images/cart.png'

const CartWidget = () => {
    return (
        <div>
            <img src={Cart} alt="Carrito" />
            <p>0</p>
        </div>
        
    )
}

export default CartWidget