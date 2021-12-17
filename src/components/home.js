import React from "react";
import './../App.css'
import { Link } from 'react-router-dom'
import home from './img/home.jpg'
function  Home() {
    return(
        <div className='main'>
        <div className='left'>
        <p className='headline'>
        <span>NUMBER 1 ONLINE PHONE STORE</span>
            We offer the best phone deals in the market, easing your purchase experience</p>
            <Link exact to="/shop" className='home-btn'>
                SHOP NOW
            </Link>
        </div>
        <div className="right">
        <img src={home} alt="Brands" />
        </div>
        </div>
        )
}
export default Home;