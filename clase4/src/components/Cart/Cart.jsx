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
        setCurrentOrder(cleanOrder)
    }, [props.favs]);

    useEffect(() =>{
        let arr = [];
        currentOrder.forEach((ele) => arr.push(JSON.parse(ele)))
        let total = 0
        arr.forEach( (ele) => total = total + (parseInt(ele.price) * parseInt(ele.quantity)) );
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
        {currentOrder.map((obj, idx)=>{
            return(<CartItem obj={obj} key={idx}/>)
        })}
        <p>{totalPrice}</p>
        </div>
    )
}

export default Cart;