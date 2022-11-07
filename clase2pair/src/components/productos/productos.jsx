import React from "react";
import './productos.css'
import Card from "../card/card";

function Productos(){

    let productos = [    { 
        "title": "Remera Blanca",
        "img": "https://http2.mlstatic.com/D_NQ_NP_918985-MLA48853594981_012022-O.webp",
        "price": "$6"
    },{
        "title": "Remera Verde",
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_941270-MLA45470696472_042021-F.webp",
        "price": "$12312"
    }, {
        "title": "Verde fluo",
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_864450-MLA51243789815_082022-F.webp",
        "price": "$123"
    },{
        "title": "Pack Color",
        "img": "https://http2.mlstatic.com/D_NQ_NP_2X_967346-MLA31645737307_072019-F.webp",
        "price": "$76576"
    }];
    


    return(
        <main>
           {productos.map((obj, idx) =>{ return( <Card key={idx} product={obj}/>)})
           }
        </main>
    )
}

export default Productos;