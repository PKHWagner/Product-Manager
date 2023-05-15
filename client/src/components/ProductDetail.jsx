import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


const ProductDetail = () => {

  const [snowboardDetail, setSnowboardDetail] = useState({})

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id)
      .then(res => {
        console.log(res.data);
        setSnowboardDetail(res.data);

      })
      .catch(err => console.log(err));
  }, []);

  const destroy = (id) => {
    axios.delete('http://localhost:8000/api/products/' + id)
      .then(res => {
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container'>
      <div className='card w-50 bg-dark bg-opacity-50 border-info border-4 text-white text-center mx-auto mt-5  shadow p-3 rounded'>
        <div className='card-body'>
          <h1 className='card-title'>{snowboardDetail.brandName}</h1>
          <div className='card-text'>
            <h2>{snowboardDetail.snowboardName}</h2>
            <p>Release Year: {snowboardDetail.snowboardReleaseYear}</p>
            <p>Price: ${snowboardDetail.snowboardPrice}</p>
          </div>
          <button className='btn btn-outline-danger' onClick={(e) => { destroy(snowboardDetail._id) }}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail