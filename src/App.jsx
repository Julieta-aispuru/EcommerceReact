import { Component, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import NavBar from './componets/NavBar';
import ItemListContainer from './componets/ItemListContainer';
import { Nav, Navbar } from 'react-bootstrap';
import {BrowserRouter, Routes,Route} from "react-router-dom";
import ItemDetailContainer from './componets/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <NavBar /> 
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:id" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

