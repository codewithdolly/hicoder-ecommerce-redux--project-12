import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// https://fakestoreapi.com/products
import {
  Header,
  ProductListing,
  ProductComponents,
  ProductDetails,
} from "./Components";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
        </div>

        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product:productId" exact ProductDetails component={ProductDetails} />
          <Route>404 not Found!</Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
