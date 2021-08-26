import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { AddTodo } from "../components";

describe("AddTodo Test", () => {
  test("should render input", () => {
    render(<AddTodo onAddTodo={() => {}} todos={[]} />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", "please add todo");
  });

  test("should type value for input", () => {
    render(<AddTodo onAddTodo={() => {}} todos={[]} />);
    const input = screen.getByRole("textbox");
    userEvent.type(input, "todo1");

    expect(input).toHaveValue("todo1");
  });
});
