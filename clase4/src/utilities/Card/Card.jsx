import React from "react";
import { Link } from "react-router-dom";
import './card.css'

function Card(props){
        return(
            <Link to={`/productos/producto/${props.obj.id}`}className="card">
                <span className="card-title">{props.obj.title}</span>
                <img src={props.obj.img} alt="" className="card-img" />
                <span className="card-price">{props.obj.price}</span>
            </Link>
        )
    }
       

export default Card;