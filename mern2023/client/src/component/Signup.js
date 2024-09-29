import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

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
    console.log("Form Data:", formData);
    PostData();
    // Clear the form after submission:
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Post the data to the server
  const PostData = async () => {
    const { name, email, phoneNumber, password, confirmPassword } = formData;
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          password,
          confirmPassword,
        }),
      });
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error Response:", errorText);
        window.alert("Unexpected response from the server");
        return;
      }

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Invalid Registration");
      } else {
        window.alert("Registration Successful");
        history.push("/login");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      window.alert("An error occurred during registration");
    }
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "77vh" }}
    >
      <h2>User Registration</h2>
      <Form
        method="POST"
        className="mt-2 p-4 border rounded bg-light"
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

        <Button variant="primary" type="submit" className="mt-4">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;
