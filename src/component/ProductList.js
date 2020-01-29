import React from "react";
import products from "../Helpers/ProductsData.js";
import { Dropdown, Button, Col, Row, Card } from 'react-materialize';


export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.products = null;
    }

    handleClick = (e) => {
        e.preventDefault();
    }

    componentDidMount() {
        this.products = products.map((product) =>
        <li key={product.id}>
          {product}
        </li>
      );
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

