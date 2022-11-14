import React, {useContext, useState} from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../App";
import './productdetail.css'

function ProductDetail(){

    let products = useContext(ProductsContext);
    const [avalaibleProducts, setAvalaibleProducts] = useState(products);

    let params = new URLSearchParams(document.location.search);
    let desiredID = params.get('ID');
    
    let obj = avalaibleProducts.find( ele => ele.id == desiredID )



    return(
        <div className="detail">
            <div className="detail-col">
                <h2>{obj.title}</h2>
                <img src={obj.img} alt="" />
            </div>
            <div className="detail-col">
                <span>{obj.price}</span>
                <button>AÑADIR A COMPRA</button>
                <Link to="/productos">
                <button>VOLVER</button>
                </Link>

            </div>
        </div>
    )

}

export default ProductDetail