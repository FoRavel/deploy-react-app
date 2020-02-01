import React from "react";
import products from "../Helpers/ProductsData.js";
import Product from "../component/Product.js";
import Information from "../component/Informations.js";
import "./Product.css";
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
                <h1>Protégeons-nous contre l'épidémie du Coronavirus</h1>
                <ul>
                    <Row>
                        {
                            this.products.map((product) =>  
                                <Col l={6} m={6} s={12}>
                                    <li key={product.id}>
                                        <Product type={product.type} text={product.textUrl} url={product.pageUrl} picture={product.pictureUrl} detailsUrl={product.detailsUrl}/>
                                    </li>
                                </Col>
                            )
                        }
                    </Row>
                </ul>
                
                <Information/>
            </div>
        );
    }
}

