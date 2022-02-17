import React from "react";
// import "./ProductComponents.scss"
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  // const { title, id, price, category, image } = products;

  return (
    <>
      {products.map((product) => {
        return (
          <>
            <div className="productComponents container" key={product.id}>
              <div className="card m-3 productComponents--card  d-flex justify-content-around" style={{width:"18rem"}}>
                <img src={product.image} className="card-img-top" alt={product.title} className="img-fluid shadow-sm p-4 border-bottom productComponents--card--img" />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p><b>${product.price}</b></p>
                  <p className="card-text">{product.category}</p>

                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ProductComponents;
