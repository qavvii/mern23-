import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Signup = () => {
  // Define state variables for each field
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform validation, send the data to a server, or store it locally
    console.log("Form Data:", formData);
    PostData();
    // For example, you can clear the form after submission:
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });

    const PostData = async (e) => {
      e.preventDefault();

      const { name, email, phone, work, password, cpassword } = formData;

      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
    };
  };

  return (
    <>
      <Container
        className="d-flex justify-content-center   align-items-center"
        style={{ height: "77vh" }}
      >
        <h2>User Registration</h2>
        <Form
          method="POST"
          className=" mt-2 p-4 border rounded bg-light "
          style={{ width: "400px" }}
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhoneNumber" className="mt-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </Form.Group>

          <Form.Group controlId="formConfirmPassword" className="mt-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mt-4"
            value="register"
          >
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Signup;
