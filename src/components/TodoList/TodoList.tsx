import React, { useEffect } from "react";
import { Todo } from "../../data";
import { TodosFilter } from "../../enum";

import "./style.scss";

interface Props {
  todos: Todo[];
  todosFilter?: TodosFilter;
  onTodoChange: (todo: Todo) => void;
}

const filterActiveTodos = (todos: Todo[]) => todos.filter((todo) => !todo.complete);
const filterCompleteTodos = (todos: Todo[]) => todos.filter((todo) => todo.complete);

const TodoList: React.FC<Props> = ({ todos, todosFilter, onTodoChange }) => {
  useEffect(()=> {
    let viewTodos: Todo[] = [];

  switch (todosFilter) {
    case TodosFilter.Active:
      viewTodos = filterActiveTodos(todos);
      break;
    case TodosFilter.Complete:
      viewTodos = filterCompleteTodos(todos);
      break;
    case TodosFilter.All:
      viewTodos = todos;
      break;
  }

//TODO Try the init state
  }, [todosFilter])
  
  // init
  // filter
  //add to do

//TODO: function naming
  const isActive = () => ${todo.complete & todo.id ? "complete" : ""}

  return (
    <ul className="todo-list">
      {viewTodos.map((todo: Todo, index: number) => (
        //TODO active/checked
        <li className={`todo-item ${isActive(todo)}`} key={todo.id}>
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
  todosFilter: TodosFilter.All,
};

export default TodoList;
