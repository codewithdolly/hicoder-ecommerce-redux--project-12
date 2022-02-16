import React from "react";
import "./App.scss";
// https://fakestoreapi.com/products
import WebRoutes from "./WebRoutes";
import { Header, ProductComponents, ProductDetails, ProductListing } from "./Components";

function App() {
  return (
    <>
      <div className="App">
      <Header />
      
        <WebRoutes />
      </div>
    </>
  );
}
export default App;
