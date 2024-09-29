import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <Form
        className="p-4 border rounded bg-light mt-5"
        style={{ width: "400px" }}
      >
        <h3 className="text-center">Login</h3>
        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-5">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>

        <div className="d-flex justify-content-center align-items-center mt-5">
          <Link className=" signup-image-link" to="/signup">
            create an account
          </Link>
        </div>
      </Form>
    </Container>
  );
};

export default Login;
