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
    <ul className="todo-list">
      {viewTodos.map((todo: Todo, index: number) => (
        <li className={`todo-item ${todo.complete ? "complete" : ""}`} key={todo.id}>
          <input
            type="checkbox"
            id={`checkbox${todo.id}`}
            data-testid={`checkbox${index}`}
            checked={todo.complete}
            onChange={() => {
              onTodoChange(todo);
            }}
          />
          <label htmlFor={`checkbox${todo.id}`}>{todo.title}</label>
        </li>
      ))}
    </ul>
  );
};

TodoList.defaultProps = {
  todos: [],
  todosFilter: TodosFilter.Active || TodosFilter.All || TodosFilter.Complete,
  onTodoChange: () => {},
};

export default TodoList;
