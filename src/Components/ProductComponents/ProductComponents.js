import React from "react";
import "./ProductComponents.scss"
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  const { title, id, price, category, image } = products;

  return (
    <>
      <div className="productComponents container-fluid">
        <div className="row mx-5 px-5 my-3">
          {products.map((product) => {
            return (
              <>
                <div className="col-md-3 my-3" key={product.id}>
                  <div className="card h-100 card-hover product-card ">
                    <img
                      src={product.image}
                      className="card-img-top img-thumbnail img-fluid shadow-sm p-4 border-bottom rounded-0"
                      alt={product.title}
                      style={{ height: "350px" }}
                    />
                    <div className="card-body p-2">
                      <p className="card-title">
                        <b>{product.title}</b>
                      </p>
                      <p>
                        <b>${product.price}</b>
                        <p>{product.category}</p>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductComponents;
