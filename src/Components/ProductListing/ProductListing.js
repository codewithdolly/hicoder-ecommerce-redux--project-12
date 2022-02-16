import React from 'react'
import { useSelector } from 'react-redux';

const ProductListing = () => {
  const products= useSelector((state) => state);
  console.log(products);

  return (
    <>
        <div className='productListing'><h2>Product Listing</h2></div>
    </>
  )
}

export default ProductListing