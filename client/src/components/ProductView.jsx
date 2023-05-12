import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductView = ({ snowboard, setSnowboard }) => {

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setSnowboard(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      {
        snowboard.map((snowboard, index) => {
          return (
            <div key={index} className='container'>
              <div className='row-cols-1 row-cols-md-3 g-4'>
                <div className='col'>
                  <div className='card bg-light shadow p-3 mb-5 rounded'>
                    <div className='card-body'>
                      <h5 className='card-title'>{snowboard.brandName}</h5>
                      <div className='card-text'>
                        <h6>{snowboard.snowboardName}</h6>
                        <p>{snowboard.snowboardReleaseYear}</p>
                        <p>${snowboard.snowboardPrice}</p>
                      </div>
                      <Link to={`/api/products/${snowboard._id}`}>Show Snowboard</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div >
  );
}

export default ProductView