import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <NavLink className="nav_link" to='/'>Licoreria</NavLink>
                </div>
                <ul className="nav_list">
                    <li>
                        <NavLink className="nav_link" to='/Cervezas'>Cervezas</NavLink>
                    </li> 
                    <li>
                        <NavLink className="nav_link" to='/Destilados/Licores'>Destilados</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav_link" to='/Cart'>
                        <CartWidget />
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>

);
}


export default NavBar;