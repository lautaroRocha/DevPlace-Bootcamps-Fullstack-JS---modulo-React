import React from "react";
import Lista from "../Lista/Lista";
import './navegacion.css'

function Navegacion(){
    return(
        <nav>
            <h2>Tu tienda de ciclismo</h2>
            <Lista />
        </nav>
    )
}

export default Navegacion;