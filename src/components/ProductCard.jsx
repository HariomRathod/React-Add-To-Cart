import React from 'react'
import { useDispatch } from 'react-redux'
// import img from '../images/download.jpg'
import { addToCart } from '../store/CartSlice'
function ProductCard({ product }) {

  const dispatch = useDispatch()

  const { title, price, image } = product

  // const {addToCart} =useSelector((state) =>state.cart)


  const handleClick = () => {


    dispatch(addToCart(product))


  }
  return (
    <>
      <div className="card-container col-4">
        <div className="card mt-2 ">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {price}</h5>
            <p className="card-text">{title}</p>
            <a href="#" className="btn btn-primary" onClick={() => handleClick()}>Add To Cart</a>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProductCard
