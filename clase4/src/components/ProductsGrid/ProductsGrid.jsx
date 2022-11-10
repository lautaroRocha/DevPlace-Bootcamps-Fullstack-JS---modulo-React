import React, {useContext, useState} from "react";
import Card from "../Card/Card";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import './products.css'
import { ProductsContext } from "../../App";


function ProductsGrid(){

    let products = useContext(ProductsContext);


    const [selectedProducts, setSelectedProducts] = useState(products);

    function filterProducts(e){
        let cat = e.target.textContent;
        let arrayFiltrado = products.filter( (obj) => {return(obj.type === cat)});
        setSelectedProducts(arrayFiltrado)

    }

    function filterProductsByText(e){
        let cat = e.target.value;
        let arrayFiltrado = products.find( (obj) => {return( obj.name.includes(cat) )});
        setSelectedProducts(arrayFiltrado)

    }

    return(
        <>
        
        <ProductsFilter filterProducts={filterProducts} filterProductsByText={filterProductsByText} setSelectedProducts={setSelectedProducts} />
    
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