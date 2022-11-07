import React from "react";
import App from "../App";

function BotonVolver(props){
    return(
        <button onClick={() =>{props.root.render(<App root={props.root}/>)}}>VOLVER
        </button>
    )
}


export default BotonVolver;