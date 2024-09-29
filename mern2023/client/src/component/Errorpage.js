import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";

const Errorpage = () => {
  return (
    <Container
      fluid
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
      id="not found "
    >
      <Row className="text-center mb-4" id="not found ">
        <Col id="notfound-404 ">
          <h1>404</h1>
          <p>Page Not Found</p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Link to="/client/src/component/Contact.js">
            <Route>
              <Button to="Contact.js"> Back to home </Button>
            </Route>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Errorpage;
