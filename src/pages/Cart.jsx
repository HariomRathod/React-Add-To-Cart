import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'

function Cart({ product }) {

  const cart = useSelector(state => state.cart)

  // const Qty=cart.cartQuantity
  const TotalPrice = cart.reduce((p, c) => {

    return p + c.price * c.cartQuantity

  }, 0)

  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          {
            cart.map(product => <CartItem key={product.id} product={product} />)
          }
        </div>
        <div className="bill-section">
          <h1>Total Item:{cart.length}</h1>
          <h1>
            Total Amount : ${TotalPrice.toFixed(2)}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  )
}

export default Cart