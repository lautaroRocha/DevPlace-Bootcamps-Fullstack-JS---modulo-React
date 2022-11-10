import './styles/app.css';
import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import React, {useState, createContext} from 'react';


export const ProductsContext = createContext();


export function App() {
  
  const [section, setSection] = useState('Intro');
  const [theme, setTheme] = useState('dark');
  const [products, setProducts] = useState()

  function switchTheme(){
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  function readProducts(){
    fetch('todos.json')
    .then(res => res.json())
    .then(data => setProducts(data));
  }
  readProducts()


  return (
    <>
    <Head setSection={setSection} switchTheme={switchTheme}/>
    <ProductsContext.Provider value={products}>
      <Main section={section}/>
    </ProductsContext.Provider>
    <Footer />
    </>
  );
}

