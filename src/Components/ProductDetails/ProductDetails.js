import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { productId }= useParams();
console.log(productId);
// const singleProduct=

  return (
    <>
      <div>
        <h2>Product Details</h2>
      </div>
    </>
  );
};

export default ProductDetails;
