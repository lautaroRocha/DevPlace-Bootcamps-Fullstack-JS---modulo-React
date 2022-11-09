import React, {useContext} from 'react';
import { ProductsContext } from '../App';
import '../styles/products-filter.css'

const ProductsFilter = (props) => {

    let products = useContext(ProductsContext);
    
    return (
         <ul className="filter">
            <li className="filter-li" onClick={props.filterProducts}>Bicicletas</li>
            <li className="filter-li" onClick={props.filterProducts}>Cascos</li>
            <li className="filter-li" onClick={props.filterProducts}>Indumentaria</li>
            <li className="filter-li" onClick={() => {props.setSelectedProducts(products)}}>Todos</li>
        </ul>
    );
}

export default ProductsFilter;