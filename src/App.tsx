import React, { useEffect, useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { AddTodo, TodoFooter, TodoList } from "./components";
import { Todo } from "./data";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [viewTodos, setViewTodos] = useState<Todo[]>([]);

  const fetchActiveTodos = () => {
    setViewTodos(todos.filter((todo) => todo.complete !== true));
  };

  const fetchCompleteTodos = () => {
    setViewTodos(todos.filter((todo) => todo.complete === true));
  };

  const fetchAllTodos = () => {
    setViewTodos(todos);
  };

  useEffect(() => {
    setViewTodos(todos);
  }, [todos.length]);

  return (
    <Container className="app">
      <h3 className="app__title">Todo</h3>
      <AddTodo
        onAddTodo={(todo: Todo) => {
          setTodos((prevTodos: Todo[]) => [todo, ...prevTodos]);
        }}
      />
      <TodoList
        todos={viewTodos}
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
      <TodoFooter
        fetchActiveTodos={() => fetchActiveTodos()}
        fetchCompleteTodos={() => fetchCompleteTodos()}
        fetchAllTodos={() => fetchAllTodos()}
      />
    </Container>
  );
};

export default App;
