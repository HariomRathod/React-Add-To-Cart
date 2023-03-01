import React from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
import ProductCard from './ProductCard'
import { fetchProducts } from '../store/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
function ProductContainer({product}) {
    
    const dispatch=useDispatch()
    // const[products,setProducts]=useState([])

    const{products,isLoading,isError,isSuccess}=useSelector(state=>state.product)

        useEffect(()=>{
            // const getProducts=async ()=>{
            //     const response= await fetch(`https://fakestoreapi.com/products`)
            //     const data=await response.json()
            //     setProducts(data)

            // }
            // getProducts()
           dispatch(fetchProducts())
        },[])

        if(isLoading){
            return <h1>Loading...</h1>
        }
        if(isError){
            return <h1>Some thing went wrong</h1>
        }


    return (
        <>
            <h1 className="all-products-title">All Products</h1>
            <div className="product row ">
                {
                    products.map(product=><ProductCard key={product.id} product={product}/>)
                }
            </div>

        </>
    )
}

export default ProductContainer