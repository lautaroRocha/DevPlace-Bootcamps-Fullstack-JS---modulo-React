import React, {useContext, useState} from "react";
import Card from "./Card";
import ProductsFilter from "./ProductsFilter";
import '../styles/products.css'
import { ProductsContext } from "../App";


function ProductsGrid(){

    let products = useContext(ProductsContext);

    const [selectedProducts, setSelectedProducts] = useState(products);

    function filterProducts(e){
        let cat = e.target.textContent;
        let arrayFiltrado = products.filter( (obj) => {return(obj.type === cat)});
        setSelectedProducts(arrayFiltrado)

    }

    return(
        <>
        
        <ProductsFilter filterProducts={filterProducts} setSelectedProducts={setSelectedProducts} />
        
            <div className="products-container">
            {selectedProducts.map( (obj, idx) => {
                return(
                    <Card obj={obj} key={idx} />
                )} 
            )}
            </div>
        
        
        </>
        )
}


export default ProductsGrid