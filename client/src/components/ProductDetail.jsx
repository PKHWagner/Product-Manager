import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductDetail = (props) => {

  const [snowboard, setSnowboard] = useState({})
  const { id } = useParams();

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id)
      .then(res => {
        console.log(res.data);
        setSnowboard(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='container w-50 text-center'>
      <h1>{snowboard.brandName}</h1>
      <h2>{snowboard.snowboardName}</h2>
      <p>Release Year: {snowboard.snowboardReleaseYear}</p>
      <p>Price: ${snowboard.snowboardPrice}</p>
    </div>
  );
}

export default ProductDetail