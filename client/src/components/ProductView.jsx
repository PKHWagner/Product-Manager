import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductView = ({ removeFromDom, snowboard, setSnowboard }) => {

  const destroy = (id) => {
    axios.delete('http://localhost:8000/api/products/' + id)
      .then(res => {
        removeFromDom(id)
      })
      .catch(err => console.log(err))
  }

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
    <div className='row row-cols-1 row-cols-md-3 g-4 mx-5'>
      {
        snowboard.map((snowboard, index) => {
          return (
            <div className='col'>
              <div key={index} className='card bg-light shadow p-3 mb-5 rounded'>
                <div className='card-body'>
                  <h5 className='card-title'>{snowboard.brandName}</h5>
                  <div className='card-text'>
                    <h6>{snowboard.snowboardName}</h6>
                    <p>{snowboard.snowboardReleaseYear}</p>
                    <p>${snowboard.snowboardPrice}</p>
                  </div>
                  <Link to={`/api/products/${snowboard._id}`}>Details</Link> ||
                  <Link className='ms-2' to={`/api/products/edit/${snowboard._id}`}>Edit</Link>
                  <div className='text-end'>
                    <button className='btn btn-outline-danger' onClick={(e) => { destroy(snowboard._id) }}>Delete</button>
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