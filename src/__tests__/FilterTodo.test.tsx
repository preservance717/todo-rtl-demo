import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TodosFilter } from "../enum";
import { FilterTodo } from "../components";

describe("FilterTodo Test", () => {
  it("should show three btns", () => {
    render(<FilterTodo currentFilter={TodosFilter.All} onFilterChange={() => {}} />);
    const btnNodes = screen.getAllByRole("button");
    expect(btnNodes.length).toBe(3);

    const activeBtnNode = screen.getByText("Active");
    expect(activeBtnNode).toBeInTheDocument();

    const completeBtnNode = screen.getByText("Complete");
    expect(completeBtnNode).toBeInTheDocument();

    const allBtnNode = screen.getByText("All");
    expect(allBtnNode).toBeInTheDocument();
    expect(allBtnNode).toHaveClass("btn-dark");
  });

  it("should show active status with all button", () => {
    render(<FilterTodo currentFilter={TodosFilter.All} onFilterChange={() => {}} />);
    const allBtn = screen.getByText("All");
    expect(allBtn).toHaveClass("btn-dark");
  });
});
