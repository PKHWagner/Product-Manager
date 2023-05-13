import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const ProductDetail = (props) => {

  const [snowboard, setSnowboard] = useState({})
  const removeFromDom = id => (props)
  const { id } = useParams();

  const navigate = useNavigate();

  const destroy = (id) => {
    axios.delete('http://localhost:8000/api/products/' + id)
      .then(res => {
        removeFromDom(id)
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id)
      .then(res => {
        console.log(res.data);
        setSnowboard(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container'>
      <div className='card w-50 bg-dark bg-opacity-50 border-info border-4 text-white text-center mx-auto mt-5  shadow p-3 rounded'>
        <div className='card-body'>
          <h1 className='card-title'>{snowboard.brandName}</h1>
          <div className='card-text'>
            <h2>{snowboard.snowboardName}</h2>
            <p>Release Year: {snowboard.snowboardReleaseYear}</p>
            <p>Price: ${snowboard.snowboardPrice}</p>
          </div>
          <button className='btn btn-outline-danger' onClick={(e) => { destroy(snowboard._id) }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail