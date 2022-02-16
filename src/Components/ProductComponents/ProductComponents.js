import React from 'react'
import { useSelector } from 'react-redux';

const ProductComponents = () => {
  const products= useSelector((state) => state.allProducts.products);
  const {id, title}= products[0];

  return (
    <>
        <div className='productComponents'>
        <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
  <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
    </>
  )
}

export default ProductComponents;