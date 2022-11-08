import React from "react";
import './lista.css'

function Lista(){
    return(
        <h3>
            <ul>
                <li data-name="Cascos">Cascos</li>
                <li data-name="Bicicletas">Bicicletas</li>
                <li data-name="Ropa">Ropa</li>
            </ul>
        </h3>
    )
}

export default Lista;