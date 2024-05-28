// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { useDispatch } from 'react-redux'
// import { Card, ListGroup, Col, Container, Row, Button } from 'react-bootstrap'
// import { Link } from 'react-router-dom'
// import { FaCartShopping } from "react-icons/fa6"
// import { Addcart } from '../redux/cartSystem'

// const Categories = () => {
//   const dispatch = useDispatch()
//   const [lproduct, setLProduct] = useState([])

//   function getProduct() {
//     axios.get('https://dummyjson.com/products')
//       .then(function (response) {
//         setLProduct(response.data.products)
//       })
//       .catch(function (error) {
//         console.log(error) 
//       })
//   }

//   useEffect(() => {
//     getProduct()
//   }, [])

//   return (
//     <div className='main'>
//       <div className="d-flex">
//         <h2>Products</h2>
//         <div>
//           <Link to="/cart">
//             <FaCartShopping size={24} />
//           </Link>
//         </div>
//       </div>
//       <Container fluid="md" className='py-5'>
//         <Row>
//           {lproduct && lproduct.map((item, index) => (
//             <Col key={index} xl={3} className="mb-3">
//               <Card>
//                 <div className="img">
//                   <Card.Img className="top" src={item.thumbnail} />
//                 </div>
//                 <div className="body">
//                   <div>{item.title}</div>
//                 </div>
//                 <div className="btn">
//                   <button onClick={() => dispatch(Addcart(item))} className='sml'>ADD</button>
//                 </div>
//                 <ListGroup className="list-group-flush">
//                   <ListGroup.Item>Price: ${item.price}</ListGroup.Item>
//                   <ListGroup.Item>Discount: {item.discountPercentage}%</ListGroup.Item>
//                 </ListGroup>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default Categories


import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Card, ListGroup, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaCartShopping } from "react-icons/fa6"
import { Addcart } from '../redux/cartSystem'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Categories = () => {

  const dispatch = useDispatch()
  const [lproduct, setLProduct] = useState([])

  function getProduct() {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setLProduct(response.data.products)
      })
      .catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    getProduct()
  }, [])

  const datatoadd = (item) => {
    dispatch(Addcart(item))
    toast.success("Added to cart");
  }
  return (
    <div className='main'>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>All Products</h2>
        <Link to="/cart">
          <FaCartShopping size={24} />
        </Link>
      </div>
      <Container fluid="md">
        <Row>
          {lproduct && lproduct.map((item, index) => (
            <Col key={index} xl={3} className="mb-4">
              <Card>
                <Link to={`/details/${item.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="img">
                    <Card.Img className="top" src={item.thumbnail} />
                  </div>
                  <div className='body'>
                    <div>{item.title}</div>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Price: {item.price}</ListGroup.Item>
                      <ListGroup.Item>Discount: {item.discountPercentage}%</ListGroup.Item>
                    </ListGroup>
                  </div>
                </Link>
                <Card.Footer>
                  <button onClick={() => datatoadd(item)} className='sml'>ADD</button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <ToastContainer />

    </div>
  )
}

export default Categories