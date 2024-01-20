import { Link } from "react-router-dom"



const Item = ({id, nombre, img, precio, stock}) => {
    return(
        <article className="Item">
            <header>
                <h2 className="ItemNombre">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={img} alt={nombre} />
            </picture>
            <section>
                <p>
                    Precio: ${precio}
                </p>
                <p>
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="botonDetalle" >Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item