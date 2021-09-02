import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { AddTodo, FilterTodo, TodoList } from "./components";
import { Todo } from "./data";
import { TodosFilter } from "./enum";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosFilter, setTodosFilter] = useState<TodosFilter>(TodosFilter.All);

  const handleFilterChange = (status: TodosFilter) => {
    //TODO Inline
    setTodosFilter(status);
  };

  const isComplete = (todo, preTodo) =>
    todo.id === preTodo.id ? !itemTodo.complete : itemTodo.complete;

  return (
    <Container className="app">
      //TODO CSS naming
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
          //TODO Extract handleTodoChange()
          setTodos((prevTodos) =>
            prevTodos.map((itemTodo: Todo) => ({
              ...itemTodo,
              //TODO Extract variable
              complete: isComplete,
            }))
          );
        }}
      />
      <FilterTodo
        onFilterChange={(status) => handleFilterChange(status)}
        currentFilter={todosFilter}
      />
    </Container>
  );
};

export default App;
