import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

import { TodosFilter } from "../enum";
import { TodoFooter } from "../components";

describe("TodoFooter Test", () => {
  it("should show three btns", () => {
    render(<TodoFooter currentFilter={TodosFilter.All} onFilterChange={() => {}} />);
    const btnNodes = screen.getAllByRole("button");
    expect(btnNodes.length).toBe(3);

    const activeBtnNode = screen.getByText("Active");
    expect(activeBtnNode).toBeInTheDocument();

    const completeBtnNode = screen.getByText("Complete");
    expect(completeBtnNode).toBeInTheDocument();

    const allBtnNode = screen.getByText("All");
    expect(allBtnNode).toBeInTheDocument();
  });

  it("should be called with buttons", () => {
    const mockOnChnange = jest.fn();
    render(<TodoFooter currentFilter={TodosFilter.All} onFilterChange={() => mockOnChnange()} />);

    const activeBtn = screen.getByText("Active");
    expect(activeBtn).toHaveClass("btn btn-light");

    userEvent.click(activeBtn);
    // expect(activeBtn).toHaveClass("btn btn-dark");
    expect(mockOnChnange).toHaveBeenCalled();
  });
});
