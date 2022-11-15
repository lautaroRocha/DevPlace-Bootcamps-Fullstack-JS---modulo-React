import React, {useState, useEffect} from "react";
import CartItem from "../../utilities/CartItem/CartItem"
import './cart.css'

function Cart(props){


    const [currentOrder, setCurrentOrder] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let order = createOrder();
        let settedOrder = new Set([...order].map(x => JSON.stringify(x)));
        let cleanOrder = Array.from(settedOrder)
        let arr = [];
        cleanOrder.forEach((ele) => arr.push(JSON.parse(ele)))
        setCurrentOrder(arr)
    }, [currentOrder]);

    useEffect(() =>{
        let total = 0
        currentOrder.forEach( (ele) => total = total + (parseInt(ele.price) * parseInt(ele.quantity)) );
        setTotalPrice(total)
    }, [currentOrder])

    function createOrder(){
        let order = [];
        props.cart.forEach((obj)=>{
            let numberOfSimilars = props.cart.filter( (ele) => { 
            return ele.id == obj.id });
            let orderedProduct = {"title" : obj.title, "quantity": numberOfSimilars.length, "price" : obj.price, "img": obj.img, "id" : obj.id}
            order.push(orderedProduct)
        })
        return order;
    }

    return(
        <div className="wrapper">
            <h2>Carrito</h2>
        <div className="cart">
            <div className="cart-head">
                <h3>Articulo</h3>
                <h3>Cantidad</h3>
                <h3>Precio</h3>
            </div>
            <div className="cart-body">
            {currentOrder.map((obj, idx)=>{
                return(<CartItem obj={obj} key={idx} removeFromCart={props.removeFromCart}/>)
            })}
            </div>
            <div className="cart-foot">
                <h5>total</h5>
                <span>{totalPrice}</span>
            </div>
        </div>
        </div>
    )
}

export default Cart;