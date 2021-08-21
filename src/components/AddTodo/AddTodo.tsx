import React, { useState } from "react";
import "./style.scss";

const ENTER_KEY_CODE = 13;

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const handleChange = ({ target }: { target: any }) => {
    setTodo(target.value);
  };

  const handlekeyDown = (event: any) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      console.log(todo);
      setTodo("");
    }
  };

  return (
    <div className="add-todo">
      <input
        className="add-todo__input"
        type="text"
        placeholder="please add todo"
        value={todo}
        onChange={handleChange}
        onKeyDown={handlekeyDown}
      />
    </div>
  );
};

export default AddTodo;
