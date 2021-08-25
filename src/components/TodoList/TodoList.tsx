import React from "react";
import { Todo } from "../../data";
import { TodosFilter } from "../../enum";

import "./style.scss";

interface Props {
  todos: Todo[];
  todosFilter: TodosFilter;
  onTodoChange: (todo: Todo) => void;
}

const filterActiveTodos = (todos: Todo[]) => todos.filter((todo) => todo.complete === false);
const filterCompleteTodos = (todos: Todo[]) => todos.filter((todo) => todo.complete === true);
const filterAllTodos = (todos: Todo[]) => todos.filter(() => true);

const TodoList: React.FC<Props> = ({ todos, todosFilter, onTodoChange }) => {
  let viewTodos: Todo[] = [];

  switch (todosFilter) {
    case TodosFilter.Active:
      viewTodos = filterActiveTodos(todos);
      break;
    case TodosFilter.Complete:
      viewTodos = filterCompleteTodos(todos);
      break;
    case TodosFilter.All:
      viewTodos = filterAllTodos(todos);
      break;
  }

  return (
    <div className="todo-list">
      {viewTodos.map((todo: Todo) => (
        <div
          className={`todo-item ${todo.complete ? "complete" : ""}`}
          key={todo.id}
          data-testid="todo"
        >
          <input
            type="checkbox"
            id={`checkbox${todo.id}`}
            checked={todo.complete}
            onChange={() => {
              onTodoChange(todo);
            }}
          />
          <label htmlFor={`checkbox${todo.id}`}>{todo.title}</label>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
