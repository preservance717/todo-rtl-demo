import React from "react";
import { Button } from "react-bootstrap";
import { TodosFilter } from "../../enum";

import "./style.scss";

interface Props {
  currentFilter: TodosFilter | null;
  onFilterChange: (status: TodosFilter) => void;
}

const TodoFooter: React.FC<Props> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="todo-footer">
      <Button
        variant={`${currentFilter === TodosFilter.Active ? "dark" : "light"}`}
        onClick={() => onFilterChange(TodosFilter.Active)}
      >
        Active
      </Button>
      <Button
        variant={`${currentFilter === TodosFilter.Complete ? "dark" : "light"}`}
        onClick={() => onFilterChange(TodosFilter.Complete)}
      >
        Complete
      </Button>
      <Button
        variant={`${currentFilter === TodosFilter.All ? "dark" : "light"}`}
        onClick={() => onFilterChange(TodosFilter.All)}
      >
        All
      </Button>
    </div>
  );
};

TodoFooter.defaultProps = {
  currentFilter: TodosFilter.All,
  onFilterChange: () => {},
};

export default TodoFooter;
