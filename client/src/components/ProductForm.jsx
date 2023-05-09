import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = (props) => {
  const [brandName, setBrandName] = useState("");
  const [snowboardName, setSnowboardName] = useState("");
  const [snowboardReleaseYear, setSnowboardReleaseYear] = useState("");
  const [snowboardPrice, setSnowboardPrice] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8000/api/products", {
      brandName, snowboardName, snowboardReleaseYear, snowboardPrice
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setBrandName("");
        setSnowboardName("");
        setSnowboardReleaseYear("");
        setSnowboardPrice("");
      })
      .catch((err) => {
        console.log("Something went wrong --->", err)
      })
  }

  return (
    <div className='container text-bg-info bg-opacity-50 p-3 w-50 rounded-3 mt-5'>

      <form onSubmit={submitHandler}>

        <div className='mb-3 text-start'>
          <label htmlFor="brandName" className='form-label'>Brand Name</label>
          <input type="text" className='form-control' name='brandName' id='brandName' value={brandName} onChange={(e) => setBrandName(e.target.value)} />
        </div>


        <div className='mb-3 text-start'>
          <label htmlFor="snowboardName" className='form-label'>Snowboard Name</label>
          <input type="text" className='form-control' name='snowboardName' id='snowboardName' value={snowboardName} onChange={(e) => setSnowboardName(e.target.value)} />
        </div>

        <div className='mb-3 text-start'>
          <label htmlFor="snowboardReleaseYear" className='form-label'>Release Year</label>
          <input type="text" className='form-control' name='snowboardReleaseYear' id='snowboardReleaseYear' value={snowboardReleaseYear} onChange={(e) => setSnowboardReleaseYear(e.target.value)} />
        </div>

        <div className='mb-3 text-start'>
          <label htmlFor="snowboardPrice" className='form-label'>Price</label>
          <input type="text" className='form-control' name='snowboardPrice' id='snowboardPrice' value={snowboardPrice} onChange={(e) => setSnowboardPrice(e.target.value)} />
        </div>

        <div className='mb-3 text-end'>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </div>

      </form>

    </div>
  )
}

export default ProductForm;