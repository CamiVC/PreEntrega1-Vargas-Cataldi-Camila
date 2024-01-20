import ItemCount from "./ItemCount"


const ItemDetail = ({id, nombre, img, categoria, descripcion, precio, stock}) =>{
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
                <ItemCount inicial={1} stock={stock} onAdd={(cantidad)=> console.log("Cantidad Agregada")} />
            </footer>
        </article>
    )
}

export default ItemDetail