import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import CartContext from "./CartContext"
import { Link } from "react-router-dom"



const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) =>{

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, nombre, precio
        }
        addItem(item, quantity)
}




    return(
        <article className="ItemDetail">
            <header>
                <h2 className="DetailNombre">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>
                    Categoria: {categoria}
                </p>
                <p>
                    Descripción: {descripcion}
                </p>
                <p>
                    Precio: ${precio}
                </p>
            </section>
            <footer>
                {
                    quantityAdded > 0 ?(
                        <Link to = "/cart" className="finalizarBoton">Finalizar compra</Link>
                    ) : (<ItemCount inicial={1} stock={stock} onAdd={handleOnAdd} />)
                }
                
            </footer>
        </article>
    )
}

export default ItemDetail