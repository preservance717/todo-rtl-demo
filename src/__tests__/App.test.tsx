import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App test", () => {
  it("should render todo list when adding todo", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "todo1");
    userEvent.type(input, "{enter}");

    const todo1TextNode = screen.getByLabelText("todo1");
    expect(todo1TextNode).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);

    userEvent.type(input, "todo2");
    userEvent.type(input, "{enter}");

    const todo2TextNode = screen.getByLabelText("todo2");
    expect(todo2TextNode).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
  });

  it("should show active list when clicking active button", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "todo0");
    userEvent.type(input, "{enter}");

    userEvent.type(input, "todo1");
    userEvent.type(input, "{enter}");

    const firstCheckbox = screen.getByTestId("checkbox0");
    userEvent.click(firstCheckbox);

    const activeBtn = screen.getByText("Active");
    userEvent.click(activeBtn);

    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.queryByLabelText("todo1")).not.toBeInTheDocument();
    expect(screen.getByLabelText("todo0")).toBeInTheDocument();
  });

  it("should show complete list when clicking complete button", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "todo0");
    userEvent.type(input, "{enter}");

    userEvent.type(input, "todo1");
    userEvent.type(input, "{enter}");

    const completeBtn = screen.getByText("Complete");
    userEvent.click(completeBtn);
    expect(screen.queryAllByRole("listitem")).toHaveLength(0);

    const allBtn = screen.getByText("All");
    userEvent.click(allBtn);

    userEvent.click(screen.getByTestId("checkbox0"));
    userEvent.click(completeBtn);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
    expect(screen.getByLabelText("todo1")).toBeInTheDocument();
    expect(screen.queryByLabelText("todo0")).not.toBeInTheDocument();

    userEvent.click(allBtn);
    userEvent.click(screen.getByTestId("checkbox1"));
    userEvent.click(completeBtn);
    expect(screen.getAllByRole("listitem")).toHaveLength(2);
    expect(screen.getByLabelText("todo0")).toBeInTheDocument();
  });

  it("should be checked when click unactive checkbox", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "todo0");
    userEvent.type(input, "{enter}");

    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });

  it("should be unchecked when click active checkbox", () => {
    render(<App />);

    const input = screen.getByRole("textbox");
    userEvent.type(input, "todo0");
    userEvent.type(input, "{enter}");

    const checkbox = screen.getByRole("checkbox");
    userEvent.click(checkbox);
    userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  });
});
