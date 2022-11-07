import React from 'react';
import './App.css';
import Garage from './components/Garage';



// 3-Mostrar por navegador el componente auto a traves del elemento “root”.

// 4-Utilizando (props), agregar al texto que se muestra en el navegador, “Soy un Auto rojo”.

// 5-Crear un componente garage dentro del componente auto. Que el componente garage tenga un texto que se muestre en el navegador diciendo: “Quién sos vos?”. Que se muestre el texto en el navegador. Que primero se muestre el texto del componente garage y segundo el del componente auto. El componente auto es contiene el elemento de texto <h2> y el componente garage contiene el elemento de texto <h1>.




function App(props) {
  return (
   <Garage root={props.root}/>
  );
}

export default App;