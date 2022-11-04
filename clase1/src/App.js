import React, {useEffect, useState, useRef} from 'react';
import './App.css';

function Sumar() {
  
  const [total, setTotal] = useState()
  
  let resultado = useRef(); 

  useEffect(() =>{
    resultado.current.textContent = total;
  }, [total])

  let sumar = () =>{
    let numeroUno = document.querySelector('#one').value;
    let numeroDos = document.querySelector('#two').value
    setTotal(parseInt(numeroUno) + parseInt(numeroDos))
  }

  return (
    <div>
      <h2>Adding Two Numbers</h2>
      <input placeholder="First Number" type="number" id="one" />
      <input placeholder="Second Number" type="number" id="two"/>
      <button onClick={sumar}>Add Two Numbers</button>
      <p ref={resultado}>Total:{total}</p>
    </div>
  );
}


function App() {

  const arrayDeUsuarios=[{nombre: "María", userID:5}, 
  {nombre: "Raúl", userID:6}, 
  {nombre: "Pablo", userID:14} ]
  
  const myFirstElement = <h1>Hola JSX</h1>
  
  let mostrarUsuarios = 
  <div className='tabla-user'>
      <div><span>Nombre:{arrayDeUsuarios[0].nombre}</span><span>Id:{arrayDeUsuarios[0].userID}</span></div>
      <div><span>Nombre:{arrayDeUsuarios[1].nombre}</span><span>Id:{arrayDeUsuarios[1].userID}</span></div>
      <div><span>Nombre{arrayDeUsuarios[2].nombre}</span><span>Id:{arrayDeUsuarios[2].userID}</span></div>
  </div>  


  return (
    <>
    {myFirstElement}
    {mostrarUsuarios}
    <Sumar />
    </>
    
  );
}

export default App;
