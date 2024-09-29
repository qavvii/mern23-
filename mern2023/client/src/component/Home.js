import React from "react";
import { Container } from "react-bootstrap";

const Home = () => {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{ height: "90vh", backgroundColor: "#282c34" }}
    >
      <h1 style={{ color: "#61dafb", fontSize: "4rem", fontWeight: "bold" }}>
        MERN Stack
      </h1>
    </Container>
  );
};

export default Home;
