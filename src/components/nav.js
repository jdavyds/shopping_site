import React, { useState} from "react";
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from "@material-ui/icons";
import './../App.css'
function Navs(props) {
    return(
        <header>
            <h1>
                JDAVYDZ STORE
            </h1>
            <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink exact to="/shop">Shop</NavLink>
            </li>
            <li>
                <button onClick={props.toggler} className='header-cart'>
                    <ShoppingCart style={{ fontSize: 40 }} />
                    <i>{props.total}</i> 
                </button>
            </li>
            </ul>
        </header>
    )
}
export default Navs;