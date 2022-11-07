import React from 'react';
import './App.css';
import Garage from './components/Garage';


function App(props) {
  return (
    <div style={{
      width:"100%",
      height:"100vh",
      margin:"0px",
      padding:"0px",
      display:"grid",
      backgroundColor:"lightgrey",
      placeItems:"center"
    }}>
      <Garage root={props.root}/>
    </div>
  );
}

export default App;