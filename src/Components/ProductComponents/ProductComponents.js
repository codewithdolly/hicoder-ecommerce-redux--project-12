import React from "react";
import "./ProductComponents.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map((product) => {
    const { title, id, price, category, image } = product;
    return (
      <>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 my-3" key={id}>
          <Link
            to={`/product/${id}`}
            className="text-decoration-none text-dark"
          >
            <div className="card h-100 card-hover product-card ">
              <img
                src={image}
                className="card-img-top img-thumbnail img-fluid shadow-sm p-4 border-bottom rounded-0"
                alt={title}
                style={{ height: "350px" }}
              />
              <div className="card-body p-2">
                <p className="card-title">
                  <b>{title}</b>
                </p>
                <p>
                  <b>${price}</b>
                  <p>{category}</p>
                </p>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="productComponents container-fluid">
        <div className="row mx-1 my-3 mx-md-2 px-md-3 mx-lg-5 px-lg-5 my-lg-3">{renderList}</div>
      </div>
    </>
  );
};

export default ProductComponents;
