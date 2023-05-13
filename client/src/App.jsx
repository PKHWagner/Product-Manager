import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../src/views/Main'
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<ProductDetail />} path="/api/products/:id" />
          <Route element={<UpdateProduct />} path="/api/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
