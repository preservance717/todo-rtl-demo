import React from "react";
import { Button } from "react-bootstrap";

import "./style.scss";

interface Props {
  fetchActiveTodos: () => void;
  fetchCompleteTodos: () => void;
  fetchAllTodos: () => void;
}

const TodoFooter: React.FC<Props> = ({
  fetchActiveTodos,
  fetchCompleteTodos,
  fetchAllTodos,
}) => {
  return (
    <div className="todo-footer">
      <Button variant="light" onClick={fetchActiveTodos}>
        Active
      </Button>
      <Button variant="light" onClick={fetchCompleteTodos}>
        Complete
      </Button>
      <Button variant="light" onClick={fetchAllTodos}>
        All
      </Button>
    </div>
  );
};

export default TodoFooter;
