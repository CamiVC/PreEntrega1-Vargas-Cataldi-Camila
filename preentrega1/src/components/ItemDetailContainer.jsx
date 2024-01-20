import { useEffect, useState } from "react"
import { getProductById } from "./Productos"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null)

    const {itemId} = useParams()

    useEffect(()=>{
        getProductById(itemId)
        .then(response=>{
            setProduct(response)
        })
        .catch(error=>{
            console.log(error)
        })
    },[itemId])

    return(
        <div>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer