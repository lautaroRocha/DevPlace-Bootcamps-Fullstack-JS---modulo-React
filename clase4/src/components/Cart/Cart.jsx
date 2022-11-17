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

    let renderStage;

    ///cada caso será refactorizado a un componente separado
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
                <button className="btn-one" onClick={()=>{setStage(2)}}>COMPRAR</button>
            </div>
            break;
            case 2:
            renderStage = 
            <div className="client-data">
                <h3>¡Tu orden está casi lista!</h3>
                <p>Completá los datos de pago y entrega para recibir tu pedido</p>
                <form action="">
                    <div>
                        <label htmlFor="name">
                            <input placeholder=" Nombre" type="text" name="name" onChange={(e) => {updateUserData(e, 'firstName')}}/>
                        </label>
                        <label htmlFor="last-name">
                            <input placeholder="A pellido" type="text" name="last-name" onChange={(e) => {updateUserData(e, 'lastName')}}/>
                        </label>
                    </div>
                    <label htmlFor="pickup-method">
                        <select name="píckuy-method" onChange={(e)=>{updateUserData(e, 'delivery')}}>
                            <option value="home delivery" >Entrega a domicilio</option>
                            <option value="post office" >Retiro en correo</option>
                        </select>
                    </label>
                    <div className="client-card">
                        <div className="client-card-name">
                            <span>{props.userData.firstName}</span>
                            <span>{props.userData.lastName}</span>
                        </div>
                        <div className="client-card-numbers">
                            <p>{props.userData.cardID}</p>
                            <span>{props.userData.cardEXP}</span>
                        </div>
                    </div>
                   <div className="client-card-data">
                     <label htmlFor="card-num" > 
                         <input  placeholder="Número de tarjeta..." type="text" name="card-num"  maxLength='13'onChange={(e) => {updateUserData(e, 'cardID')}}/>
                     </label>
                     <label htmlFor="card-exp" id="card-exp"> 
                         <input placeholder="Vencimiento... (mm/aa)" type="text" name="card-exp" onChange={(e) => {updateUserData(e, 'cardEXP')}}/>
                     </label>
                   </div>
                </form>
                <button onClick={sendOrder}>Confirmar compra</button>
            </div>;
            break;
            case 3:
            renderStage = 
            <div className="client-data">
                    <h1>GRACIAS POR SU COMPRA</h1>
                    <Link to="/" onClick={()=>{setStage(1)}}>
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