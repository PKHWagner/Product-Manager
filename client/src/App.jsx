import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../src/views/Main'
import ProductDetail from './components/ProductDetail';


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/" default />
          <Route element={<ProductDetail />} path="/api/products/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
