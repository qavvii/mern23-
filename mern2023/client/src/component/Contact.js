import React, { useState } from "react";

import { TelephoneFill, EnvelopeFill, GeoAltFill } from "react-bootstrap-icons";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <Container className="mt-5">
      <h2>Contact Information</h2>
      <Row className="mt-4">
        <Col md={4} className="d-flex align-items-center">
          <TelephoneFill className="me-2" />
          <span> 8112341234</span>
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <EnvelopeFill className="me-2" />
          <span>email@example.com</span>
        </Col>
        <Col md={4} className="d-flex align-items-center">
          <GeoAltFill className="me-2" />
          <span>1234 Main St, Anytown, USA</span>
        </Col>
      </Row>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="p-4 shadow">
              <Card.Body>
                <h2 className="mb-4 text-center">Contact Us</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPhone" className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Enter your message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Contact;
