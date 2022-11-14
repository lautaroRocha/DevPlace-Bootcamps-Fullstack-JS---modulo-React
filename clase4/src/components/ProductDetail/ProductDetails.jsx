import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../App";
import './productdetail.css'

function ProductDetail(props){

    let products = useContext(ProductsContext);

    let params = new URLSearchParams(document.location.search);
    let desiredID = params.get('ID');
    
    let obj = products.find( ele => ele.id == desiredID )


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