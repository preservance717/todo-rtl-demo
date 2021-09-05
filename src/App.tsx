import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { AddTodo, FilterTodo, TodoList } from "./components";
import { Todo } from "./data";
import { TodosFilter } from "./enum";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todosFilter, setTodosFilter] = useState<TodosFilter>(TodosFilter.All);

  const isComplete = (itemTodo: Todo, todo: Todo) =>
    itemTodo.id === todo.id ? !itemTodo.complete : itemTodo.complete;

  const handleTodoChange = (todo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((itemTodo: Todo) => ({
        ...itemTodo,
        complete: isComplete(itemTodo, todo),
      }))
    );
  };

  return (
    <Container className="app">
      <h3 className="app__header">Todo</h3>
      <AddTodo
        todos={todos}
        onAddTodo={(todo: Todo) => {
          setTodos((prevTodos: Todo[]) => [todo, ...prevTodos]);
        }}
      />
      <TodoList
        todos={todos}
        todosFilter={todosFilter}
        onTodoChange={(todo: Todo) => handleTodoChange(todo)}
      />
      <FilterTodo onFilterChange={(status) => setTodosFilter(status)} currentFilter={todosFilter} />
    </Container>
  );
};

export default App;
