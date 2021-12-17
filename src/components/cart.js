import React from "react";
import CartContent from "./cartContent";
import { Close } from '@material-ui/icons'
function Cart(props) {
    return(
        <aside className={props.show}>
        <div className="nav visible nav-butter">
            <div className="nav visible nav-green">
                <div className="nav visible nav-white">
                    <h2 className='cart-header'>Cart <i>{props.total}</i></h2>
                    <button className="nav-btn close-btn" onClick={props.toggler}>
                        <Close />
                    </button>
                    <CartContent name={props.name} 
                    details={props.details}
                    handleIncrease={props.handleIncrease} 
                    handleDecrease={props.handleDecrease}
                    sub={props.sub}
                    total={props.total} />
                    <button type="reset" className='checkout' onClick={props.handleCheckOut}>CHECKOUT</button>
                </div>
            </div>
        </div>
        </aside>
    )
}
export default Cart;