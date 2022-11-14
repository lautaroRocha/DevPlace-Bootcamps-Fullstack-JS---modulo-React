import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import './productdetail.css'

function ProductDetail(props){

    let products = useContext(ProductsContext);
   
    let params = useParams();
    
    let obj = products.find( ele => ele.id == params.id )

    return(
        <div className="detail">
            <div className="detail-col">
                <h2>{obj.title}</h2>
                <img src={obj.img} alt="" />
            </div>
            <div className="detail-col">
                <span>{obj.price}</span>
                <button onClick={() => {props.addToCart(obj)}}>AÑADIR A COMPRA</button>
                <Link to="/productos">
                <button>VOLVER</button>
                </Link>

            </div>
        </div>
    )

}

export default ProductDetail