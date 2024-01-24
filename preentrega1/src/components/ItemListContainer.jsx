import React, { useEffect, useState } from 'react'
import { getProducts } from './Productos'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    const categoria = useParams().categoria

    useEffect(()=>{
        getProducts()
        .then(response=>{
            if (categoria) {
                setProducts(response.filter((products) => products.categoria === categoria))
            } else {
                setProducts(response)
            }
            
        })
        .catch(error=>{
            console.log(error)
        })
    }, [categoria])




    return (
        <div className='ItemListContainer'>
            <h2 className='greeting'>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer