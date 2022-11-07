import React from 'react';
import logo from './logo.svg';
import './App.css';


// 1-Crear una clase y que sea un componente. Que represente un auto. Que el texto diga: “Soy un Auto”


export class AutoClase extends React.Component{
  render(){
    return (<h2>Soy un auto</h2>)
  }

}
// 2-Crear una función componente que represente un auto.
function Auto(props){
  return(
    <h2>Soy un auto funcional, y además {props.color}</h2>
  )
}
// 3-Mostrar por navegador el componente auto a traves del elemento “root”.

// 4-Utilizando (props), agregar al texto que se muestra en el navegador, “Soy un Auto rojo”.

// 5-Crear un componente garage dentro del componente auto. Que el componente garage tenga un texto que se muestre en el navegador diciendo: “Quién sos vos?”. Que se muestre el texto en el navegador. Que primero se muestre el texto del componente garage y segundo el del componente auto. El componente auto es contiene el elemento de texto <h2> y el componente garage contiene el elemento de texto <h1>.

function Garage(){
  return(
    <>
      <h1>¿Quién sos vos?</h1>
      <Auto color="rojo"></Auto>
    </>
  )
}


export function App() {
  return (
   <Garage />
  );
}

