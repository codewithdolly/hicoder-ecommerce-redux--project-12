import React from "react";
import "./ProductComponents.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);


  const renderList= products.map((product) => {
    const { title, id, price, category, image } = product;
    return (
      <>
        <div className="col-md-3 my-3" key={id}>
          <Link to={`/product/${id}`} className="text-decoration-none text-dark">
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
  })

  return (
    <>
      <div className="productComponents container-fluid">
        <div className="row mx-5 px-5 my-3">
         {renderList}
        </div>
      </div>
    </>
  );
};

export default ProductComponents;
