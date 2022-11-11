import React, {useContext} from 'react';
import { ProductsContext } from '../../App';
import './products-filter.css'

const ProductsFilter = (props) => {

    let products = useContext(ProductsContext);

    return (
        <>
         <ul className="filter">
            <li onClick={props.filterProducts}>Bicicletas</li>
            <li onClick={props.filterProducts}>Cascos</li>
            <li onClick={props.filterProducts}>Indumentaria</li>
            <li onClick={() => {props.setSelectedProducts(products)}}>Todos</li>
        </ul>
        <input type="text" onChange={props.filterProductsByText} />
        </>
    );
}

export default ProductsFilter;