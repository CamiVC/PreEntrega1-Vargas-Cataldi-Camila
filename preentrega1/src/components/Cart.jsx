import { useContext } from "react"
import CartContext from "./CartContext"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"



const Cart = () => {
    const {cart, clearCart, totalQuantity, precioTotal} = useContext(CartContext)

    if(totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/"  >Productos</Link>
            </div>
        )
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id}{...p}/>)}
            <h3>Total: ${precioTotal()}</h3>
            <button onClick={()=> clearCart()} className="botonBorrar">Vaciar Carrito</button>
            <Link to="/checkout" className="botonCheckout">Checkout</Link>
        </div>
    )
}

export default Cart