import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux";
import ProductComponents from "../ProductComponents";
import { SetProducts } from "../../Redux/Action/productActions";
import axios from "axios";

const ProductListing = () => {
  const products = useSelector((state) => state);
  // console.log(products);

  const dispatch=  useDispatch();

  const productApi = `https://fakestoreapi.com/products`;
  const fetchProducts = async () => {
    const response = await axios.get(productApi).catch((error) => {
      console.log(error);
    });
    dispatch(SetProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("products:", products);

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
