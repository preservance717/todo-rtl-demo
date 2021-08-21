import React from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { AddTodo } from "./components";

const App = () => {
  return (
    <Container className="app">
      <h3 className="app__title">Todo</h3>
      <AddTodo />
    </Container>
  );
};

export default App;
