import './styles/app.css';
import Head from './components/Head/Head';
import ProductDetail from './components/ProductDetail/ProductDetails';
import Intro from './components/Intro/Intro';
import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import Brand from './components/Brand/Brand';
import Faq from './components/FAQ/FAQ';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import React, {useState, createContext, useEffect} from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";



export const ProductsContext = createContext();


export function App() {
  
  const [theme, setTheme] = useState('dark');
  const [products, setProducts] = useState()
  const [cart, setCart] = useState([])

  function addToCart(prdct){
    let currentOrder = cart;
    currentOrder.push(prdct);
    setCart(currentOrder)
  }

  function switchTheme(){
    theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  useEffect(() => {
    fetch('todos.json')
    .then(res => res.json())
    .then(data => setProducts(data));
  }, []);
    

  return (
    <>
    <BrowserRouter>
    <Head switchTheme={switchTheme}/>
    <ProductsContext.Provider value={products}>
      <Routes>
        <Route path="/" element={<Intro />}/>
        <Route path="/productos" element={<ProductsGrid />}/>
        <Route path="/carrito" element={<Cart cart={cart} />}/>
        <Route path="/marca" element={<Brand />}/>
        <Route path="/faq" element={<Faq />}/>
        <Route path="/productos/producto" element={<ProductDetail addToCart={addToCart}/>}/>
      </Routes>
    </ProductsContext.Provider>
    </BrowserRouter>
    <Footer />
    </>
  );
}

