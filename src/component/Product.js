import React from "react";
import "./Product.css";
import { Dropdown, Button, Col, Row } from 'react-materialize';


export default class Product extends React.Component {

  render() {
    return (
        <div>
        <Row>   
        <a href="https://www.amazon.fr/gp/product/B07Q5Q473M/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B07Q5Q473M&linkCode=as2&tag=fravel-21&linkId=58318927f2c8adc867f2dbe2cb3911dd">
            <img src="https://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=FR&ASIN=B07Q5Q473M&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=fravel-21" alt=""/>
        </a>
        </Row>
        <Row>       
             <a target="_blank" href="https://www.amazon.fr/gp/product/B07Q5Q473M/ref=as_li_tl?ie=UTF8&camp=1642&creative=6746&creativeASIN=B07Q5Q473M&linkCode=as2&tag=fravel-21&linkId=5229b0617b5b18575424b536f83a84b7">Anios Gel Désinfectant pour Friction Hydro Alcoolique Flacon 100 ml</a>
        </Row>
  
        </div>
    );
  }
}

