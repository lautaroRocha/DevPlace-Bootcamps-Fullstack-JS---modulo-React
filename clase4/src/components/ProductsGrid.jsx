import React, {useContext} from "react";
import Card from "./Card";
import '../styles/products.css'
import { ProductsContext } from "../App";


function ProductsGrid(){

    let products = useContext(ProductsContext)

    return(
        <div className="products-container">
        {products.map( (obj, idx) => {
            return(
                <Card obj={obj} key={idx} />
            )} 
        )}
        </div>
        )
}


export default ProductsGrid