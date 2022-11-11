import React from "react";
import { Link } from "react-router-dom";
import './head.css'

function Head(props){

    let sunIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z"/></svg>;

    function scrollFunction() {
        if (document.documentElement.scrollTop > 100) {
            document.querySelector("header").style.height = "5rem";
            document.querySelector("header").style.backgroundColor = "var(--back)";
        } else {
            document.querySelector("header").style.height = "10rem";
            document.querySelector("header").style.backgroundColor = "var(--trans-back)";

        }
    }
    

    window.onscroll = () =>{
        scrollFunction()
    };


    return(
        <header>
            <div className="logo">
                <Link to="/">
                    <h1>Cyclops</h1>
                </Link>
            </div>
            <nav>
                <ul>
                    <Link to="/productos" >Productos</Link>
                    <Link to="/marca" >Marca</Link>
                    <Link to="/faq">FAQ</Link>
                    <Link to="/carrito">carrito</Link>
                    <Link onClick={props.switchTheme}> {sunIcon}</Link>

                </ul>
            </nav>
        </header>
    )
}

export default Head;