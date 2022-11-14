import React from "react";
import './cart.css'

function Cart(props){
    return(
        <div className="wrapper">
        <p>{JSON.stringify(props.cart)}</p>
        </div>
    )
}

export default Cart;