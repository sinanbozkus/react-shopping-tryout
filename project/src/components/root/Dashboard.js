import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ProductList from "../products/ProductList";
import CategoryList from "../categories/CategoryList";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs="3">
            <CategoryList></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList></ProductList>
          </Col>
        </Row>
      </div>
    );
  }
}
