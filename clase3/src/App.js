import React, {useState} from 'react';
import './App.css';
import Head from './components/Head/Head';
import Productos from './components/Productos/Productos';

// 1-Crear un nuevo proyecto con nombre a elección, donde
// tendrá que ser creada una aplicación de react. El proyecto
// será una landing page de productos. Tene en cuenta que la
// mejor práctica es trabajar con archivos y que cada archivo
// sea un componente. Los componentes serán “functional
// components”.

// 2- crear un componente que tenga un componente hijo y que
// este tenga un componente hijo.
// el hijo del hijo tiene que contener un texto h3, el hijo
// del padre un texto h2 y el padre un h1.
// Se tiene que mostrar en el navegador en el siguiente orden:
// h1, h2, h3.

// 3- crear 3 componentes donde cada uno representará un
// producto distinto que ofrece la la landing page. Cada
// producto debe tener nombre, precio y descripción.

// 4- crear un botón “Resumen de productos” que una vez que se
// hace click muestre debajo de él, los 3 nombres de los
// productos creados en el punto anterior.

// 5-crear un botón “Que fecha es?” en donde una vez que se
// hace click en el cambia el texto por la fecha actual con
// día, hora, minutos y segundos.



function App() {

  const [categoria, setCategoria] = useState();
  const [productos, setProductos] = useState([]);

  switch(categoria){
    case "Bicicletas":
      fetch('bicicletas.json')
      .then(res => res.json())
      .then(data => setProductos(data))
      break;
      case "Cascos":
      fetch('cascos.json')
      .then(res => res.json())
      .then(data => setProductos(data))
      break;
      case "Ropa":
      fetch('ropa.json')
      .then(res => res.json())
      .then(data => setProductos(data))
      break;
  }

  return (
    <>
      <Head setCategoria={setCategoria}/>
      <Productos productos={productos} categoria={categoria}/>
    </>
  );
}

export default App;
