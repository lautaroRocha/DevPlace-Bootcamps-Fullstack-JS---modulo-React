import React from "react";
import './product.css'
import Card from "../Card/Card";

function Productos(props){

    return(
        <main>
            <h4>{props.categoria}</h4>
            <div>
            {props.productos.length !== 0 ? props.productos.map( (obj, idx) => {return <Card  obj={obj} key={idx}/>}) : <span>Elige una categoría para ver los productos disponibles</span>}
            </div>
        </main>
    )
}

export default Productos;


