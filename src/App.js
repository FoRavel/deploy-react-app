import React from 'react';
import Product from './component/Product';
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
            <Product />
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
