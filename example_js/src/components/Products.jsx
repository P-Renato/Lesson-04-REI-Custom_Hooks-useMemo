import React from 'react'
import UseFetch from '../hooks/useFetch'


function Products() {
    const [data, setData] = UseFetch('https://fakestoreapi.com/products')
  return (
    <div>Products
      <h1>{console.log(data)}</h1>
    </div>
  )
}

export default Products
