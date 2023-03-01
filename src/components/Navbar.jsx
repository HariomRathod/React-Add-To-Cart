import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Navbar() {

    const cart = useSelector(state=>state.cart)
    // console.log(cart)


  return (
   <>
   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
       <Link to={'/'}> <a className="navbar-brand" href="#">NAVBAR</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          
            <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">ELECTRONICS</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">JEWELERY</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">MEN'S CLOTHING
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">WOMEN'S CLOTHING
                    </a>
                </li>

            </ul>

            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search Product Here"
                    aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search </button>

            </form>
            <Link to={'/Cart'}>
    <button className="btn btn-outline-success add" type="submit">CART {cart.length}</button>
            
            </Link>
        </div>
    </div>
</nav>
   
   </>
  )
}

export default Navbar