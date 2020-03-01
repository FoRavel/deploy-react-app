import React, { Suspense } from 'react';
import Product from './component/Product';
import ProductList from './component/ProductList';
import Details from './component/Details';
import SocialShare from './component/SocialShare';
import { ProductInsert, ProductUpdate } from './pages'
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
      <SocialShare />
      <Router>
        <Switch>
          <Route exact path="/">
            <Suspense fallback="loading">
              <ProductList />
            </Suspense>
          </Route>
          <Route path="/about">
            <Details />s
          </Route>
          <Route path="/product/create">
            <ProductInsert />
          </Route>
          <Route path="/product/update/:id">
            <ProductUpdate />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
