import React from "react";
import "./Product.css";
import { Dropdown, Button, Col, Row, Card } from 'react-materialize';
import { withTranslation } from 'react-i18next';


export default class Product extends React.Component {

  constructor(props) {
    super(props);
    this.textUrl =this.props.text;
    this.pictureUrl = this.props.picture;
    this.shopUrl = this.props.url;
    this.detailsUrl = this.props.detailsUrl;
    this.type = this.props.type;
   }


   componentDidMount(){
     console.log(this.shopUrl)
   }
  render() {
    return (
      <div>
        
          
            <div className="center-align">
              <Card
                actions={[
                  <a key="1" href={this.shopUrl}>Voir le prix sur Amazon</a>,
                  <a key="2" target="_blank" href={this.detailsUrl} onClick>Détails</a>
                ]}
                title={this.type}
              >
                <Row>
                  <a href={this.shopUrl}>
                    <img src={this.pictureUrl} alt="" />
                  </a>
                </Row>
                <Row>
                  <a target="_blank" href={this.shopUrl}>{this.textUrl}</a>
                </Row>
              </Card>
            </div>
          
        


      </div>
    );
  }
}

