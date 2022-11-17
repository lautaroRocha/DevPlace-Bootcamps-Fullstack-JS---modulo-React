import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";
import CartStageOne from "../../utilities/cartStageOne";
import CartStageTwo from "../../utilities/cartStageTwo";
import './cart.css'

function Cart(props){

    const [totalPrice, setTotalPrice] = useState(0)
 
    const [stage, setStage] = useState(1)

    useEffect(() =>{
        let total = 0
        props.cart.forEach( (ele) => total = total + (parseInt(ele.price) * parseInt(ele.quantity)) );
        setTotalPrice(total)
    }, [props.changes])
    
    function updateUserData(e, sec){
        let data = props.userData;
        data[sec] = e.target.value
        props.setUserData(data)
        props.changes ? props.setChanges(false) : props.setChanges(true)
    }

    function sendOrder(){
        let data = props.userData;
        let order = JSON.stringify(props.cart);
        data.order = order;
        console.log(data)
        props.setUserData(data)
        cleanCart();
        setTimeout(setStage(3), 2500)
        console.log(props.userData);
        props.setUserData({firstName : "", 
        lastName : "", 
        delivery : "" ,
        cardID : ["x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x", "x"], 
        cardEXP : "mm/aa",
        order : {}})
    }

    function cleanCart(){
        localStorage.removeItem('order');
    }

    function checkData(){
        let valores = Object.values(props.userData)
        console.log(valores)
        if(valores.includes("") || valores.includes("mm/aa") || valores.includes(['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'])){
            alert('debes llenar todos los campos');
            return;
        }else{
            sendOrder();
        }
    }


    let renderStage;

    switch(stage){
            case 1:
            renderStage = <CartStageOne cart={props.cart} removeFromCart={props.removeFromCart} multiplyProductInCart={props.multiplyProductInCart} totalPrice={totalPrice} setStage={setStage}/>
            break;
            case 2:
            renderStage = <CartStageTwo setStage={setStage} updateUserData ={updateUserData} userData={props.userData} checkData={checkData}/>
            break;
            case 3:
            renderStage = 
            <div className="client-end">
                    <h1>GRACIAS POR SU COMPRA</h1>
                    <Link className="cart-return-btn" to="/" onClick={()=>{setStage(1)}}>
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