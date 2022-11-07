import React from "react";
import Auto from "./Auto-func";
import AutoClase from "./Auto-class";
import BotonVolver from "./Boton-volver";

function Garage(props){
    
    const Autos = () => {
        return( 
        <div 
        style={{
            height:"100vh",
            display:"grid",
            placeContent: "center",
            margin:"0px",
            backgroundColor:"lightgrey",
            textAlign: "center"
        }}>
            <AutoClase /> 
            <Auto color="rojo" root={props.root}/> 
            <BotonVolver root={props.root} />
        </div>)
    }

    return(
            <div 
            style={{
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
            <p style={{
                fontSize: "100px",
                margin:'0px'
            }}>🏢</p>
            <h1>Soy un garage, ¿qué hay dentro mío?</h1>
            <button onClick={() =>{props.root.render(<Autos/>)}}>ABRIR PUERTA</button>
            </div>
        )
    }

export default Garage;