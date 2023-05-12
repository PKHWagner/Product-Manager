import React, { useState } from 'react';
import axios from 'axios';
import ProductForm from "../components/ProductForm";
import ProductView from "../components/ProductView";

const Main = () => {

  const [snowboard, setSnowboard] = useState([]);

  return (
    <div>
      <div className='container w-75'>
        <h1 className='text-center mt-5'>Classic Snowboard Trader</h1>
        <ProductForm snowboard={snowboard} setSnowboard={setSnowboard} />
        <hr />
      </div>
      <ProductView snowboard={snowboard} setSnowboard={setSnowboard} />
    </div>
  )
}

export default Main;