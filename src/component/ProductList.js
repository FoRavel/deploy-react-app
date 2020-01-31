import React from "react";
import products from "../Helpers/ProductsData.js";
import Product from "../component/Product.js";
import { Dropdown, Button, Col, Row, Card } from 'react-materialize';


export default class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.products = products;
    }

    handleClick = (e) => {
        e.preventDefault();
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>



                <ul>
                    <Row>
                        {
                            this.products.map((product) =>

                                <Col l={4} m={6} s={12}>
                                    <li key={product.id}>
                                        <Product text={product.textUrl} url={product.pageUrl} picture={product.pictureUrl} />
                                    </li>
                                </Col>
                            )
                        }
                    </Row>
                </ul>
            </div>
        );
    }
}

