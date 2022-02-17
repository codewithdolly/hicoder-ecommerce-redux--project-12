import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../../Redux/Action/productActions";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);

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
    if (productId && productId !== "") fetchProductDetails();

    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <>
      <div>
        {Object.keys((product).length === 0 ? (<>loading...</>):(<>Heyy</>))}
      </div>
    </>
  );
};

export default ProductDetails;
