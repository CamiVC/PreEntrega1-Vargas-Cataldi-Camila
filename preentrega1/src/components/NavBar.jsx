import React from 'react'
import CartWidget from './CartWidget'


const NavBar = () => {
return (
    <div className='NavBar'> 
        <div className='botones'>
        <button id="labial">Labial</button>
        <button id="base">Base</button>
        <button id="delineador">Delineador</button>
        </div>
        <div>
            <h1>CAMI COSMETICS</h1></div>
        <div>
            <CartWidget/>
        </div>
    </div>
)
}

export default NavBar