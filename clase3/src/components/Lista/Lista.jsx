import React from "react";
import './lista.css'

function Lista(props){

    function cambiarCategoria(e){
        props.setCategoria(e.target.textContent)
    }
    return(
        <h3>
            <ul>
                <li data-name="Cascos" onClick={cambiarCategoria}>Cascos</li>
                <li data-name="Bicicletas" onClick={cambiarCategoria}>Bicicletas</li>
                <li data-name="Ropa" onClick={cambiarCategoria}>Ropa</li>
                <li data-name="Todos" onClick={cambiarCategoria}>Todos</li>
            </ul>
        </h3>
    )
}

export default Lista;