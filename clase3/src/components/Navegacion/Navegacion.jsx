import React from "react";
import Lista from "../Lista/Lista";
import './navegacion.css'

function Navegacion(props){
    return(
        <nav>
            <h2>Tu tienda de ciclismo</h2>
            <Lista setCategoria={props.setCategoria}/>
        </nav>
    )
}

export default Navegacion;