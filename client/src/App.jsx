import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Main from '../src/views/Main'
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';


const App = () => {

  const [snowboard, setSnowboard] = useState([]);

  const removeFromDom = id => {
    console.log("REMOVE FROM DOM ----->", id)
    setSnowboard(snowboard.filter(item => item._id !== id))
    console.log("REMOVE SUCCESSFULL")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/home" />} path="/" />
          <Route element={<Main snowboard={snowboard} setSnowboard={setSnowboard} removeFromDom={removeFromDom} />} path="/home" default />
          <Route element={<ProductDetail snowboard={snowboard} setSnowboard={setSnowboard} removeFromDom={removeFromDom} />} path="/products/view/:id" />
          <Route element={<UpdateProduct snowboard={snowboard} setSnowboard={setSnowboard} />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
