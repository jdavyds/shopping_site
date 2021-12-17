import React, { useState } from "react";

function CartContent(props) {
    return(
        <>
        {
        props.details.map(detail => {
          return(
            <div className='item'>
                <label htmlFor="detail" className='cart-label'>
                    <p className='item-name'> {detail.name}</p>  <br />
                    <nav className="control">
                    <button onClick={props.handleDecrease} value={detail.idx}>-</button>
                    <div className='quantity' value={detail.idx}>{detail.quantity}</div>
                    <button onClick={props.handleIncrease} value={detail.idx}>+</button>
                    </nav>
                </label>
                <strong value={detail.idx}>{detail.price * detail.quantity}</strong>
            </div>
          )})
        }
        <div>
            <p className='subtotal'>
                Subtotal <strong> ${props.sub} </strong> 
            </p>
        </div>
        </>
    )
}

export default CartContent;