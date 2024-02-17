import React, { useContext } from 'react'
import Cart from './images/cart.png'
import { Link } from 'react-router-dom'
import CartContext from './CartContext'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    
    return (
        <Link to="/cart">
            <img src={Cart} alt="Carrito" />
            {totalQuantity}
        </Link>
        
    )
}

export default CartWidget