import React from "react";
import ProductsGrid from "../ProductsGrid/ProductsGrid";
import Brand from "../Brand/Brand";
import Intro from "../Intro/Intro";
import Faq from "../FAQ/FAQ";
import './main.css'

function Main(props){

    let content;

    switch(props.section){
        case 'Productos':
        content = <ProductsGrid />
        break;
        case 'Marca':
        content = <Brand />
        break;
        case 'Intro':
        content = <Intro />
        break;
        case 'FAQ':
        content = <Faq />
        break;
    }

    return(
        <main>
            {content}
        </main>
    )
}

export default Main;