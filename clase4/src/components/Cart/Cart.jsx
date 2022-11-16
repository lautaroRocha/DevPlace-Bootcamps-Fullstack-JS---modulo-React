import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";

import CartItem from "../../utilities/CartItem/CartItem"
import './cart.css'

function Cart(props){

    const [totalPrice, setTotalPrice] = useState(0)

    const [stage, setStage] = useState(1)

    useEffect(() =>{
        let total = 0
        props.cart.forEach( (ele) => total = total + (parseInt(ele.price) * parseInt(ele.quantity)) );
        setTotalPrice(total)
    }, [props.changes])
    
    let renderStage;

    switch(stage){
            case 1:
            renderStage = 
            <div className="cart">
            <div className="cart-head">
                <h3>Articulo</h3>
                <h3>Cantidad</h3>
                <h3>Precio</h3>
            </div>
            <div className="cart-body">
            {props.cart !== [] &&
            props.cart.map((obj, idx)=>{
                return(<CartItem obj={obj} key={idx} removeFromCart={props.removeFromCart} multiplyProductInCart={props.multiplyProductInCart}/>)
            })}
            </div>
            <div className="cart-foot">
                <h5>total</h5>
                <span>{totalPrice}</span>
            </div>
                <button onClick={()=>{setStage(2)}}>COMPRAR</button>
            </div>
            break;
            case 2:
            renderStage = 
            <div className="client-data">
                <form action="
                " style={{
                    display: "flex",
                    flexDirection: "column"
                }}>
                    <input type="text" /><input type="text" /><input type="text" /><input type="text" /><input type="text" />
                </form>
                <button onClick={()=>{setStage(3)}}>Confirmar compra</button>
            </div>;
            break;
            case 3:
            renderStage = 
            <div className="client-data">
                    <h1>GRACIAS POR SU COMPRA</h1>
                    <Link to="/productos" onClick={()=>{setStage(1)}}>
                        VOLVER</Link>
            </div>
    }
    

    return(
        <div className="wrapper">
            <h2>Carrito</h2>
            {renderStage}


        <div className="back-img-3"></div>
        <div className="back-img-2"></div>
        </div>
    )
}

export default Cart;