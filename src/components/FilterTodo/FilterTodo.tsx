import React from "react";
import { Button } from "react-bootstrap";
import { TodosFilter } from "../../enum";

import "./style.scss";

interface Props {
  currentFilter: TodosFilter | null;
  onFilterChange: (status: TodosFilter) => void;
}

const FilterTodo: React.FC<Props> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-todo">
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

FilterTodo.defaultProps = {
  currentFilter: TodosFilter.All,
  onFilterChange: () => {},
};

export default FilterTodo;
