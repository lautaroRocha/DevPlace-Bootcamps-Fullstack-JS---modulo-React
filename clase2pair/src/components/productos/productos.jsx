import React, {useState, useEffect} from "react";
import './productos.css'
import Card from "../card/card";

function Productos(){


    const [productos, setProductos] = useState([])

    async function leerProductos(){
        let res = await fetch("productos.json");
        if(res.ok){
            let data = await res.json();
            setProductos(data);
        }else{
            console.log('intente de nuevo')
        }
    }
    
    return(
        <main>
           {productos.length === 0  ? <span onClick={leerProductos}>Todavía no se cargó nada, si me tocás a lo mejor se carga</span> : productos.map((obj, idx) =>{ return( <Card key={idx} product={obj}/>)}) 
           }
        </main>
    )
}

export default Productos;