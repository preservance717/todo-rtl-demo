import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { AddTodo, TodoFooter, TodoList } from "./components";
import { Todo } from "./data";
import { TodosFilter } from "./enum";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosFilter, setTodosFilter] = useState<TodosFilter>(TodosFilter.All);

  const handleFilterChange = (status: TodosFilter) => {
    setTodosFilter(status);
  };

  return (
    <Container className="app">
      <h3 className="app__title">Todo</h3>
      <AddTodo
        todos={todos}
        onAddTodo={(todo: Todo) => {
          setTodos((prevTodos: Todo[]) => [todo, ...prevTodos]);
        }}
      />
      <TodoList
        todos={todos}
        todosFilter={todosFilter}
        onTodoChange={(todo: Todo) => {
          setTodos((prevTodos) =>
            prevTodos.map((itemTodo: Todo) => ({
              ...itemTodo,
              complete: itemTodo.id === todo.id ? !itemTodo.complete : itemTodo.complete,
            }))
          );
        }}
      />
      <TodoFooter
        onFilterChange={(status) => handleFilterChange(status)}
        currentFilter={todosFilter}
      />
    </Container>
  );
};

export default App;
