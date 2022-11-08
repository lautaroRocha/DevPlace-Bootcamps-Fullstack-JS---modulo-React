import React from "react";
import './head.css'
import Navegacion from "../Navegacion/Navegacion";

function Head(props){
    return(
        <header>
            <h1>Cyclops</h1>
            <Navegacion setCategoria={props.setCategoria}/>
        </header>
    )
}

export default Head;