import React from "react";
import { Todo } from "../../data";

import "./style.scss";

interface Props {
  todos: Todo[];
  onTodoChange: (todo: Todo) => void;
}

const TodoList: React.FC<Props> = ({ todos, onTodoChange }) => {
  return (
    <div className="todo-list">
      {todos.map((todo: Todo) => (
        <div className={`todo-item ${todo.complete ? "complete" : ""}`} key={todo.id}>
          <input
            type="checkbox"
            id="a"
            checked={todo.complete}
            onChange={() => onTodoChange(todo)}
          />
          <label htmlFor="a">{todo.title}</label>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
