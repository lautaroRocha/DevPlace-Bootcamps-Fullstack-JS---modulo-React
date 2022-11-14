import React from "react";
import './cartitem.css'

function CartItem(props){

    let obj = JSON.parse(props.obj)

    return(
        <div className="cart-item">
            <div className="cart-item-col">
                <h2>{obj.title}</h2>
                <img src={obj.img} alt="" />
            </div>
            <div className="cart-item-col">
                <span>{obj.price}</span>
                <span>{obj.quantity}</span>
            </div>
        </div>
    )
}

export default CartItem