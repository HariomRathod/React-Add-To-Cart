import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { remove, increment, decrement } from '../store/CartSlice'
// import { v4 as uuid } from 'uuid';

function CartItem({ product }) {
  const [count, setCount] = useState()
  const { title, image, price, id, cartQuantity } = product
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(remove(id))

  }

  const handleDecrement = (id) => {
    // dispatch(decrement(id))
    
    if(cartQuantity <= 1){
      dispatch(remove(id))
    }else{
      dispatch(decrement(id))

    }

  }
  const handleIncrement = (id) => {
    dispatch(increment(id))
  }
  return (
    <div className="cart-item  ">
      <img src={image} alt="" />
      <span>
        <h1>{title}</h1>
        <h3>Rate : {price}</h3>
        {/* <button onClick={() => handleDecrement(id)}>-</button> */}
        <button className="btn btn-primary w-50 " onClick={() => handleDecrement(id)}>-</button>
        <h3>Qty : {cartQuantity}</h3>
        <button className="btn btn-primary w-50 " onClick={() => handleIncrement(id)}>+</button>

        {/* <button onClick={() => handleIncrement(id)}>+</button> */}

      </span>
      <button className="remove-btn" onClick={() => handleDelete(id)}>Remove Item</button>
    </div>
  )
}

export default CartItem