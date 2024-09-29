import React from "react";
import Nav from "./component/Nav";
import Home from "./component/Home";
import { Route } from "react-router-dom";
import Contact from "./component/Contact";
import About from "./component/About";
import Login from "./component/Login";
import Signup from "./component/Signup";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Errorpage from "./component/Errorpage";
const App = () => {
  return (
    <div>
      <Nav />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
        <Contact />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/*">
        <Errorpage />
      </Route>
    </div>
  );
};

export default App;
