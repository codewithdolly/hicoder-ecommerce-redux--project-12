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
  const { image, title, price, category, description } = product;

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
      <div className="container">
        <div className="row my-5">
          {Object.keys(product).length === 0 ? (
            <div>loading...</div>
          ) : (
            <>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                {" "}
                <img src={image} className=" shadow-sm p-4" width="500px" />
              </div>
              <div className="col-12 col-sm-12 col-md-12 col-lg-6 mt-2 ">
                <h3>{title}</h3>
                <h2 className="text-">
                  <a className="">${price}</a>
                </h2>

                <button
                  type="button"
                  class="btn btn-light border btn-block mt-4 mb-2 text-capitalize"
                >
                  {category}
                </button>
                <p>{description}</p>
                <div className="">
                  <div className="">
                    <i className="shop icon"></i>
                  </div>
                  <div className="mt-3">
                    {" "}
                    <button
                      type="button"
                      class="btn btn-success btn-lg mr-2 px-3"
                    >
                      Buy Now
                    </button>
                    <button type="button" class="btn btn-warning btn-lg px-3">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
