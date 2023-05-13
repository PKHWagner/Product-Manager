import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateProduct = (props) => {

  const { id } = useParams();
  const [brandName, setBrandName] = useState();
  const [snowboardName, setSnowboardName] = useState();
  const [snowboardReleaseYear, setSnowboardReleaseYear] = useState();
  const [snowboardPrice, setSnowboardPrice] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8000/api/products/' + id)
      .then(res => {
        setBrandName(res.data.brandName);
        setSnowboardName(res.data.snowboardName);
        setSnowboardReleaseYear(res.data.snowboardReleaseYear);
        setSnowboardPrice(res.data.snowboardPrice);
      })
      .catch(err => console.log(err))
  }, [])

  const update = (e) => {
    e.preventDefault();
    axios.patch('http://localhost:8000/api/products/' + id, {
      brandName,
      snowboardName,
      snowboardReleaseYear,
      snowboardPrice
    })
      .then(res => {
        console.log(res);
        navigate("/")
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='container text-bg-dark bg-opacity-50 border border-warning border-4 p-3 w-50 rounded-3 mt-5 shadow mb-5 rounded'>
      <form onSubmit={update}>

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
          <button type='submit' className='btn btn-outline-warning'>Update</button>
        </div>

      </form>
    </div>
  )
}

export default UpdateProduct