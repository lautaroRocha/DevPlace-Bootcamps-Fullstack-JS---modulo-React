import React from "react";
import './card.css'


function Card(props){
    return(
        <div className="card">
            {console.log(props.product)}
            <span className="card-title">{props.product.title}</span>
            <img src={props.product.img} alt="" className="card-img" />
            <span className="card-price">{props.product.price}</span>
        </div>
    )
}

export default Card;