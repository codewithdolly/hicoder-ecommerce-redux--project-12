import React from "react";
import { useSelector } from "react-redux";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
  // const { title, id, price, category, image } = products;

  return (
    <>
      {products.map((product) => {
        return (
          <>
            <div className="productComponents" key={product.id}>
              <div className="card" style={{ width: "18rem" }}>
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p><b>{product.price}</b></p>
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
