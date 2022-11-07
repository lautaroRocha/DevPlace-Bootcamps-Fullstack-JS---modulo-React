import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';

// 1-Crear una clase y que sea un componente. Que represente un auto. Que el texto diga: “Soy un Auto”
// 2-Crear una función componente que represente un auto.
// 3-Mostrar por navegador el componente auto a traves del elemento “root”.
// 4-Utilizando (props), agregar al texto que se muestra en el navegador, “Soy un Auto rojo”.
// 5-Crear un componente garage dentro del componente auto. Que el componente garage tenga un texto que se muestre en el navegador diciendo: “Quién sos vos?”. Que se muestre el texto en el navegador. Que primero se muestre el texto del componente garage y segundo el del componente auto. El componente auto es contiene el elemento de texto <h2> y el componente garage contiene el elemento de texto <h1>.


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <App root={root}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
