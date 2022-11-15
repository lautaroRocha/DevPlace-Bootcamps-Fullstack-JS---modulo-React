import React from "react";
import './cartitem.css'

function CartItem(props){

    let obj = props.obj

    return(
        <div className="cart-item">
                <h4>{obj.title}</h4>
                <div>
                    <span className="cart-btn add">+</span>
                    <span>{obj.quantity}</span>
                    <span className="cart-btn take" onClick={props.removeFromCart}>-</span>
                </div>
                <span>{obj.price}</span>
        </div>
    )
}

export default CartItem