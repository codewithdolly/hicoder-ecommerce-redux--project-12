import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { Header, ProductListing, ProductDetails } from "./Components";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Header />
        </div>

        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />

          <Route>404 not Found!</Route>
        </Switch>
      </Router>
    </>
  );
}
export default App;
