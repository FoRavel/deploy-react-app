import React from "react";
import Product from "../component/Product.js";
import SocialShare from "../component/SocialShare.js";
import Information from "../component/Informations.js";
import { withTranslation } from 'react-i18next';
import "./Product.css";
import { Dropdown, Button, Col, Row, Card } from 'react-materialize';
import api from "../api";


class ProductList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products : []
        }
        
    }

    handleClick = (e) => {
        e.preventDefault();
    }

    componentDidMount = async() => {
        await api.getAllProducts().then(products =>{
            this.setState({products:products.data.data})
        } )
    }


    render() {
        return (
            <div>
                <h1>Protégeons-nous contre l'épidémie du Coronavirus</h1>
                <ul>
                    <Row>
                        {
                            this.state.products.map((product) =>  
                                <Col l={6} m={6} s={12}>
                                    <li key={product._id}>
                                        <Product type={product.type} text={product.textUrl} url={product.shopUrl} picture={product.pictureUrl} detailsUrl={product.detailsUrl}/>
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
export default withTranslation()(ProductList)

