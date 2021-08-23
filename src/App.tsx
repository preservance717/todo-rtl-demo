import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { AddTodo, TodoList } from "./components";
import { Todo } from "./data";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <Container className="app">
      <h3 className="app__title">Todo</h3>
      <AddTodo
        onAddTodo={(todo: Todo) => {
          setTodos((prevTodos: Todo[]) => [todo, ...prevTodos]);
        }}
      />
      <TodoList
        todos={todos}
        toggleTodoStatus={(todo: Todo) => {
          setTodos(
            todos.map((itemTodo: Todo) => {
              if (itemTodo.id === todo.id) {
                itemTodo.complete = !itemTodo.complete;
              }
              return itemTodo;
            })
          );
        }}
      />
    </Container>
  );
};

export default App;
