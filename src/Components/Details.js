import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Details = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setItem(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])

  if (!item) {
    return null
  }

  return (

    <div className='details-container'>
      <div className="details">
        <div className="details-image">
          <img src={item.thumbnail}  />
        </div>
        <h3>Product Information</h3>
        <table className="detail_t">
          <tbody>
            <tr>
              <td className="label">Name</td>
              <td>{item.title}</td>
            </tr>
            <tr>
              <td className="label">Description</td>
              <td>{item.description}</td>
            </tr>
            <tr>
              <td className="label">Price</td>
              <td>{item.price}</td>
            </tr>
            <tr>
              <td className="label">Category</td>
              <td>{item.category}</td>
            </tr>
            <tr>
              <td className="label">Discount Percentage</td>
              <td>{item.discountPercentage}%</td>
            </tr>
            <tr>
              <td className="label">Rating</td>
              <td>{item.rating}</td>
            </tr>
            <tr>
              <td className="label">Stock</td>
              <td>{item.stock}</td>
            </tr>
            <tr>
              <td className="label">Brand</td>
              <td>{item.brand}</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Images</h3>
        <div className="details-thumbnails">
          {item.images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
