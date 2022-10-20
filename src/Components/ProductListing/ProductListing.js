import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponents from "../ProductComponents";
import { SetProducts, fetchProducts } from "../../Redux/Action/productActions";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  // console.log(products);

  const dispatch = useDispatch();

  // fetching data
  // const productApi = `https://fakestoreapi.com/products`;
  // const fetchProducts = async () => {
  //   const response = await axios.get(productApi).catch((error) => {
  //     console.log(error);
  //   });
  //   dispatch(SetProducts(response.data));
  // };

  useEffect(() => {
    dispatch(fetchProducts());
  },[]);

  console.log("products:", products);

  return (
    <>
      <div className="productListing">
        <ProductComponents />
      </div>
    </>
  );
};

export default ProductListing;
