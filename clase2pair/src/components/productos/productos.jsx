import React from "react";
import './productos.css'
import Card from "../card/card";

function Productos(){

    let productos = [];

    async function leerProductos(){
        let res = await fetch("productos.json");
        if(res.ok){
            let data = await res.json();
            productos = data; 
            console.log(productos);
        }else{
            console.log('intente de nuevo')
        }
    }
    leerProductos()
    
    function mostrarCards(){
        productos.map((obj, idx) =>{
            return(
                <Card key={idx} product={obj}/>
                )
        })
    }


    return(
        <main>
            <button onClick={mostrarCards}>mostrar productos</button>
        </main>
    )
}

export default Productos;