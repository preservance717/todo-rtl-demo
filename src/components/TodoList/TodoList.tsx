import React from "react";
import { Todo } from "../../data";

import "./style.scss";

interface Props {
  todos: Todo[];
  toggleTodoStatus: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodoStatus }) => {
  return (
    <div className="todo-list">
      {todos.map((todo: Todo) => (
        <div
          className={`todo-item ${todo.complete ? "complete" : ""}`}
          key={todo.id}
        >
          <input
            type="checkbox"
            id="a"
            checked={todo.complete}
            onChange={() => toggleTodoStatus(todo)}
          />
          <label htmlFor="a">{todo.title}</label>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
