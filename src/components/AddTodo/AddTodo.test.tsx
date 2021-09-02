import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddTodo } from "..";

describe.only("AddTodo", () => {
  test("should render the input box", () => {
    render(<AddTodo onAddTodo={() => {}} todos={[]} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "please add todo");
  });

  test("should have value when typing any value for input", () => {
    render(<AddTodo onAddTodo={() => {}} todos={[]} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "todo1");

    expect(input).toHaveValue("todo1");
  });
});
