import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import Product from "../Components/Products/Product";

const HomeScreen = () => {
  const uiProducts = products.map((product,idx) => {
    return (
      <Col key={idx} sm={12} md={6} xl={3} lg={4}>
        <Product key={idx} product={product} />
      </Col>
    );
  });
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>{uiProducts}</Row>
    </div>
  );
};
export default HomeScreen;
