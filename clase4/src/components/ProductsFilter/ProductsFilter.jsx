import React, {useContext} from 'react';
import { ProductsContext } from '../../App';
import './products-filter.css'
import * as icons from '../../utilities/varIconsFilter'

const ProductsFilter = (props) => {

    let products = useContext(ProductsContext);

    return (
        <>
        <div className="filter">
         <ul >
            <li onClick={props.filterProducts} cat="Bicicletas">Bicicletas{icons.bikes}</li>
            <li onClick={props.filterProducts}>{icons.helmets}Cascos</li>
            <li onClick={props.filterProducts}>{icons.clothing}Indumentaria</li>
            <li onClick={() => {props.setSelectedProducts(products)}}>{icons.all}</li>
        </ul>
        </div>
        </>
    );
}

export default ProductsFilter;