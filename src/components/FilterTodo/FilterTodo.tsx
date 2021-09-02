import React from "react";
import { Button } from "react-bootstrap";
import { TodosFilter } from "../../enum";

import "./style.scss";

interface Props {
  currentFilter?: TodosFilter | null;
  onFilterChange: (status: TodosFilter) => void;
}

const isFilterHighlighted = (filter, prevFilter) => filter === prevFilter ? "active" : ""
const FilterTodo: React.FC<Props> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-todo">
      // TODO TodosFilter.map((item) => {
        return (
          <Button
        role="radio"
        variant={isFilterHighlighted(item, currentFilter)}
        onClick={() => onFilterChange(item)}
      >
        )
      })
        {item}
      </Button>
    </div>
  );
};

FilterTodo.defaultProps

export default FilterTodo;
