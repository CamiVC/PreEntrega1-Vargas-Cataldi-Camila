import React, { useEffect, useState } from 'react'
import { getProducts } from './Productos'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
        .then(response=>{
            setProducts(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])




    return (
        <div className='ItemListContainer'>
            <h2 className='greeting'>{greeting}</h2>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer