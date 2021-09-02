import React, { useState } from "react";

import { Todo } from "../../data";
import "./style.scss";

const ENTER_KEY_CODE = 13;

interface Props {
  onAddTodo: (todo: Todo) => void;
  todos: Todo[];
}

const AddTodo: React.FC<Props> = (props: Props) => {
  const [title, setTitle] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handlekeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //TODO event.key === 'Enter'
    if (event.keyCode === ENTER_KEY_CODE) {
      props.onAddTodo({
        id: `${props.todos.length}`,
        title: title,
        complete: false,
      });
      setTitle("");
    }
  };

  return (
    <div className="add-todo">
      <input
        className="add-todo__input"
        type="text"
        placeholder="please add todo"
        value={title}
        onChange={handleChange}
        onKeyDown={handlekeyDown}
      />
    </div>
  );
};

AddTodo.defaultProps = {
  todos: [],
  onAddTodo: () => {},
};

export default AddTodo;
