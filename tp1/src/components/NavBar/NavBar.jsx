import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';


const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav_brand">
                    <a className="nav_link" href="#">Licoreria</a>
                </div>
                <ul className="nav_list">
                    <li>
                        <a className="nav_link" href="#">Cervezas</a>
                    </li> 
                    <li>
                        <a className="nav_link" href="#">Destilados</a>
                    </li>
                    <li>
                        <a className="nav_link" href="#">
                        <CartWidget />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

);
}


export default NavBar;