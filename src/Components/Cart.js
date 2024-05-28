import { useDispatch, useSelector } from 'react-redux'
import { Container, Table } from 'react-bootstrap'
import React from 'react'
import { increment ,decrement,clear, deletei} from '../redux/cartSystem'


const Cart = () => {
  const { cart,grandTotal } = useSelector((state) => state.user)

  const dispatch = useDispatch()
  



  return (
    <div>
      <Container fluid="md" className='py-5'>
        <Table border={2} >
          <thead>
            <tr>
              <th style={{backgroundColor:'#0c5273' ,color:'#fff'}}>Images</th>
              <th style={{backgroundColor:'#0c5273' ,color:'#fff'}}>Title</th>
              <th style={{backgroundColor:'#0c5273' ,color:'#fff'}}>Quantity</th>
              <th style={{backgroundColor:'#0c5273' ,color:'#fff'}}>Price</th>
              <th style={{backgroundColor:'#0c5273' ,color:'#fff'}}>Total Price</th>
              <th style={{backgroundColor:'#0c5273' ,color:'#fff'}}>Delete Items</th>
         
            </tr>
          </thead>
          <tbody>
            {cart && cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src={item.thumbnail} style={{ width: '200px' }} />
                </td>
                <td>{item.title}</td>
                <td>

                  <button onClick={() => dispatch(increment(index))}>+</button>
                  {item.qty}
                  <button onClick={()=> dispatch(decrement(index))}>-</button> 
                </td>

                <td>{item.price}</td>
                <td>{item.total}</td>
                <td>
                  <button onClick={() => dispatch(deletei(index))}>Delete</button>
                </td>


              </tr>
            ))}
          </tbody>


        </Table>

        <tr>
          
        <h5 className='align-item-center'>Grand Total: ${grandTotal}</h5>

        </tr>
        {/* <button>REMOVE</button> */}
        <button className='remove' onClick={() => dispatch(clear())}>Remove</button>

      </Container>
    </div>
  )
}

export default Cart