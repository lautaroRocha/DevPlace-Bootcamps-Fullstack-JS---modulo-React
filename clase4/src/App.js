import './styles/app.css';
import Head from './components/Head/Head';
import Main from './components/Main/Main';
import Intro from './components/Intro/Intro';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import Brand from './components/Brand/Brand';
import Faq from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import React, {useState, createContext} from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";



export const ProductsContext = createContext();


export function App() {
  
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
    <BrowserRouter>
    <Head switchTheme={switchTheme}/>
    <ProductsContext.Provider value={products}>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/productos" element={<ProductsGrid/>}/>
        <Route path="/marca" element={<Brand />}/>
        <Route path="/faq" element={<Faq />}/>
      </Routes>
    </ProductsContext.Provider>
    </BrowserRouter>
    <Footer />
    </>
  );
}

