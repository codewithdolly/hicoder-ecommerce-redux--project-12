import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductComponents from "../ProductComponents";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  // console.log(products);

  const productApi = `https://fakestoreapi.com/products`;
  const fetchProducts = async () => {
    const response = await axios.get(productApi).catch((error) => {
      console.log(error);
    });
    console.log(response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="productListing">
        <h2>Product Listing</h2>
      </div>
      <ProductComponents />
    </>
  );
};

export default ProductListing;
