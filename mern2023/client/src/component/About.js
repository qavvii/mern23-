import React from "react";
import { Container, Nav, Tab, Row, Col, Image, Card } from "react-bootstrap";
const About = () => {
  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col md={3} className="d-flex justify-content-center">
          <Image
            src="https://via.placeholder.com/300"
            alt="Profile"
            roundedCircle
            fluid
          />
        </Col>
        <Col md={5}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="information">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="information">Information</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="timeline">Timeline</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="information">
                <Card className="mt-4">
                  <Card.Body>
                    <Card.Title>User Information</Card.Title>
                    <Row>
                      <Col sm={4}>
                        <strong>User ID:</strong>
                      </Col>
                      <Col sm={8}>123456</Col>
                    </Row>
                    <Row>
                      <Col sm={4}>
                        <strong>Name:</strong>
                      </Col>
                      <Col sm={8}>John Doe</Col>
                    </Row>
                    <Row>
                      <Col sm={4}>
                        <strong>Email:</strong>
                      </Col>
                      <Col sm={8}>john.doe@example.com</Col>
                    </Row>
                    <Row>
                      <Col sm={4}>
                        <strong>Phone Number:</strong>
                      </Col>
                      <Col sm={8}>+1-234-567-8900</Col>
                    </Row>
                    <Row>
                      <Col sm={4}>
                        <strong>Profession:</strong>
                      </Col>
                      <Col sm={8}>Software Developer</Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="timeline">
                <Card className="mt-4">
                  <Card.Body>
                    <Card.Title>Timeline</Card.Title>
                    <p>Timeline content goes here...</p>
                  </Card.Body>
                </Card>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Col>
        <Col md={4}>
          <input
            type="submit"
            className="profile-edit-btn"
            name="btnAddMore"
            value="edit profile"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
