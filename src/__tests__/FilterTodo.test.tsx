import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TodosFilter } from "../enum";
import { FilterTodo } from "../components";

describe("FilterTodo", () => {
  it("Should show three filter buttons by default", () => {
    render(<FilterTodo onFilterChange={() => {}} />);
    const btnNodes = screen.getAllByRole("button");
    expect(btnNodes.length).toBe(3);

    const activeBtnNode = screen.getByText("Active");
    expect(activeBtnNode).toBeInTheDocument();

    const completeBtnNode = screen.getByText("Complete");
    expect(completeBtnNode).toBeInTheDocument();

    const allFilter = screen.getByText("All");
    expect(allFilter).toBeInTheDocument();
    expect(allFilter).toHaveClass("btn-active");
  });

  it("All filter is active by default", () => {
    render(<FilterTodo currentFilter={TodosFilter.All} onFilterChange={() => {}} />);
    const allBtn = screen.getByText("All");
    expect(allBtn).toHaveClass("btn-dark");
  });
});
