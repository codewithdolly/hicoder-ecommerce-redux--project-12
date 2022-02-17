import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../../Redux/Action/productActions";

const ProductDetails = () => {
  const product= useSelector((state)=> state.product);
  const { productId } = useParams();
  console.log(productId);

  const dispatch = useDispatch();

  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => {
        console.log(error);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if(productId && productId !=="")fetchProductDetails()
  }, [productId]);

  return (
    <>
      <div>
        <h2>Product Details</h2>
      </div>
    </>
  );
};

export default ProductDetails;
