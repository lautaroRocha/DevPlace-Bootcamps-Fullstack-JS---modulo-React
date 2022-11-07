import React from "react";
import Auto from "./Auto-func";

function Garage(props){
    return(
            <>
            <h1>Soy un garage, ¿qué hay dentro mío?</h1>
            <button onClick={() =>{props.root.render(<Auto color="rojo" />)}}>ABRIR PUERTA</button>
            </>
        )
    }

export default Garage;