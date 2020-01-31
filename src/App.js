import React from 'react';
import Product from './component/Product';
import ProductList from './component/ProductList';
import Details from './component/Details';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/about">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
