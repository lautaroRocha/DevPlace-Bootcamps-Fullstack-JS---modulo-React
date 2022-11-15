import React from "react";
import './cartitem.css'

function CartItem(props){

    let obj = JSON.parse(props.obj)

    return(
        <div className="cart-item">
                <h4>{obj.title}</h4>
                <span>{obj.quantity}</span>
                <span>{obj.price}</span>
        </div>
    )
}

export default CartItem