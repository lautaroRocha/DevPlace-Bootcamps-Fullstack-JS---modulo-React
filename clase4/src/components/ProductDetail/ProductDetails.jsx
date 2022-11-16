import React, {useContext, useState} from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../App";
import './productdetail.css'

function ProductDetail(props){

    let products = useContext(ProductsContext);
   
    let params = useParams();
    
    let obj = products.find( ele => ele.id == params.id )

    return(
        <>
        <div className="wrapper">
        <div className="detail">
            <div className="detail-col">
                <div className="detail-blob glass">
                <h2>{obj.title}</h2>
                <img src={obj.img} alt="" />
                </div>
            </div>
            <div className="detail-col">
                <span>{obj.price}</span>
                <div className="detail-actions">
                    <button className="glass" onClick={() => {props.addToCart(obj)}}>AÑADIR A COMPRA</button>
                    <Link className="glass" to="/productos">
                        VOLVER
                    </Link>
                </div>
            </div>
        </div>
        <div className="back-img"></div>
        </div>
        </>
    )

}

export default ProductDetail