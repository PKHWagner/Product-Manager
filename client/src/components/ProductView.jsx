import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductView = ({ removeFromDom, snowboard, setSnowboard }) => {
  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
      .then((res) => {
        setSnowboard(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  const destroy = (id) => {
    axios.delete('http://localhost:8000/api/products/' + id)
      .then(res => {
        removeFromDom(id)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='row row-cols-1 row-cols-md-3 g-4 mx-5'>
      {
        snowboard.map((board, index) => {
          return (
            <div className='col'>
              <div key={index} className='card bg-light shadow p-3 mb-5 rounded'>
                <div className='card-body'>
                  <h5 className='card-title'>{board.brandName}</h5>
                  <div className='card-text'>
                    <h6>{board.snowboardName}</h6>
                    <p>{board.snowboardReleaseYear}</p>
                    <p>${board.snowboardPrice}</p>
                  </div>
                  <Link to={`/products/view/${board._id}`}>Details</Link> ||
                  <Link className='ms-2' to={`/products/edit/${board._id}`}>Edit</Link>
                  <div className='text-end'>
                    <button className='btn btn-outline-danger' onClick={(e) => { destroy(board._id) }}>Delete</button>
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