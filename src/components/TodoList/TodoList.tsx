import React, { useEffect, useState } from "react";
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

const TodoList: React.FC<Props> = ({ todos, todosFilter, onTodoChange }) => {
  // const [viewTodos, setViewTodos] = useState<Todo[]>(todos);

  // useEffect(() => {
  //   setViewTodos(todos);
  //   console.log("useEffect viewtodos", viewTodos);
  // }, [todos]);
  let viewTodos: Todo[] = [];
  switch (todosFilter) {
    case TodosFilter.Active:
      viewTodos = filterActiveTodos(todos);
      break;
    case TodosFilter.Complete:
      viewTodos = filterCompleteTodos(todos);
      break;
    case TodosFilter.All:
      console.log("All");
      viewTodos = todos;

      break;
  }
  // useEffect(() => {
  //   console.log("todosFilter", todosFilter);
  //   switch (todosFilter) {
  //     case TodosFilter.Active:
  //       console.log("active");
  //       setViewTodos(filterActiveTodos(todos));
  //       break;
  //     case TodosFilter.Complete:
  //       console.log("Complete");
  //       setViewTodos(filterCompleteTodos(todos));
  //       break;
  //     case TodosFilter.All:
  //       console.log("All");
  //       setViewTodos(todos);
  //       break;
  //   }
  // }, [todosFilter]);

  return (
    <ul className="todo-list">
      {console.log(JSON.stringify(viewTodos))}
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
