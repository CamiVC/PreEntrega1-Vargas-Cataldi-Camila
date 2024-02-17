import { useContext } from "react"
import CartContext from "./CartContext"


const CartItem = ({id,nombre, quantity, precio}) => {
    const {removeItem} = useContext(CartContext)

    return (
        <article className="cartItem1">
            <header>
                <h2>
                    {nombre}
                </h2>
            </header>
            <section className="cartItem">
                <p>
                    Cantidad: {quantity}
                </p>
                <p>
                    Precio por unidad: ${precio}
                </p>
                <p>
                    Subtotal: ${precio*quantity}
                </p>
                <button onClick={()=> removeItem(id)}>
                    X
                </button>
            </section>
            <footer>
            </footer>
        </article>
    )
}

export default CartItem