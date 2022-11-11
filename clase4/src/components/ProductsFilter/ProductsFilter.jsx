import React, {useContext} from 'react';
import { ProductsContext } from '../../App';
import './products-filter.css'

const ProductsFilter = (props) => {

    let products = useContext(ProductsContext);

    return (
        <>
        <div className="filter">
         <ul >
            <li onClick={props.filterProducts}>Bicicletas</li>
            <li onClick={props.filterProducts}>Cascos</li>
            <li onClick={props.filterProducts}>Indumentaria</li>
            <li onClick={() => {props.setSelectedProducts(products)}}>Todos</li>
        </ul>
        </div>
        </>
    );
}

export default ProductsFilter;