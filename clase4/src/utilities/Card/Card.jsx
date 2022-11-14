import React from "react";
import { Link } from "react-router-dom";
import './card.css'

function Card(props){
        return(
            <div className="card">
            <span className="card-title">{props.obj.title}</span>
            <img src={props.obj.img} alt="" className="card-img" />
            <span className="card-price">{props.obj.price}</span>
            <Link to={`/productos/producto/${props.obj.id}`}>
                <button>ver detalle</button>
            </Link>
        </div>
        )
    }
       

export default Card;