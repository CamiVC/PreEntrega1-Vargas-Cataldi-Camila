import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
return (
    <div className='NavBar'> 
        <div className='botones'>
        <NavLink to={`/categoria/labial`} className="button">Labial</NavLink>
        <NavLink to={`/categoria/base`} className="button">Base</NavLink>
        <NavLink to={`/categoria/sombra`} className="button">Sombra</NavLink>
        </div>
        <Link to={"/"} className='titulo'>
            <h1>CAMI COSMETICS</h1>
        </Link>
        <div>
            <CartWidget/>
        </div>
    </div>
)
}

export default NavBar