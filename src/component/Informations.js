import React from "react";
import "./Product.css";
import { Dropdown, Button, Col, Row, Card } from 'react-materialize';


export default class Information extends React.Component {

    constructor(props) {
        super(props);
        this.textUrl = this.props.text;
        this.pictureUrl = this.props.picture;
        this.pageUrl = this.props.url;
    }

    render() {
        return (
            <Row>
                <p>
                    <i>Les produits ci-dessus sont fabriqués en France et ont été sélectionnés pour leur capacité à protéger contre la contamination au <strong>Coronavirus</strong> mais aussi d'autres maladies courantes comme la Grippe. Vous pouvez également les trouver en pharmacie sous réserve de stock disponible.</i>
                </p>

            </Row>
        );
    }
}

