import React from "react";
import "./Product.css";
import { Dropdown, Button, Col, Row, Card } from 'react-materialize';


export default class Product extends React.Component {

  constructor(props) {
    super(props);
    this.textUrl =this.props.textUrl;
    this.pictureUrl = this.props.pictureUrl;
    this.pageUrl = this.props.pageUrl;
  }

  handleClick = (e) => {
    e.preventDefault();
  }


  render() {
    return (
      <div>
        <Row>
          <Col
            l={3}
            m={6}
            s={12}
          >
            <div className="center-align">
              <Card
                actions={[
                  <a key="1" href="#">Acheter</a>,
                  <a key="2" href="#" onClick>En savoir plus</a>
                ]}
              >
                <Row>
                  <a href="https://www.amazon.fr/gp/product/B07Q5Q473M/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B07Q5Q473M&linkCode=as2&tag=fravel-21&linkId=58318927f2c8adc867f2dbe2cb3911dd">
                    <img src="https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B07Q5Q473M&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=fravel-21" alt="" />
                  </a>
                </Row>
                <Row>
                  <a target="_blank" href="https://www.amazon.fr/gp/product/B07Q5Q473M/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B07Q5Q473M&linkCode=as2&tag=fravel-21&linkId=5229b0617b5b18575424b536f83a84b7">Anios Gel Désinfectant pour Friction Hydro Alcoolique Flacon 100 ml</a>
                </Row>
              </Card>
            </div>
          </Col>
        </Row>


      </div>
    );
  }
}

