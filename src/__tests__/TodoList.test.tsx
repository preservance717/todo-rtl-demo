import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TodoList } from "../components";
import { Todo } from "../data";
import { TodosFilter } from "../enum";

describe("TodoList Test", () => {
  it("should show all todos", () => {
    const todos: Todo[] = [
      {
        title: "todo1",
        complete: false,
        id: "1",
      },
      {
        title: "todo2",
        complete: false,
        id: "2",
      },
    ];
    render(<TodoList todos={todos} todosFilter={TodosFilter.All} onTodoChange={() => {}} />);
    const todoItemNodes = screen.getAllByRole("listitem");

    expect(todoItemNodes.length).toBe(2);
  });

  it("should show active todos", () => {
    const todos: Todo[] = [
      {
        title: "todo1",
        complete: false,
        id: "1",
      },
      {
        title: "todo2 ",
        complete: true,
        id: "2",
      },
      {
        title: "todo3",
        complete: false,
        id: "3",
      },
    ];
    render(<TodoList todos={todos} todosFilter={TodosFilter.Active} onTodoChange={() => {}} />);
    const todoItemNodes = screen.getAllByRole("listitem");

    expect(todoItemNodes.length).toBeLessThan(3);
    expect(todoItemNodes.length).toBe(2);
  });

  it("should show complete todos", () => {
    const todos: Todo[] = [
      {
        title: "todo1",
        complete: false,
        id: "1",
      },
      {
        title: "todo2 ",
        complete: true,
        id: "2",
      },
      {
        title: "todo3",
        complete: false,
        id: "3",
      },
    ];
    render(<TodoList todos={todos} todosFilter={TodosFilter.Complete} onTodoChange={() => {}} />);
    const todoItemNodes = screen.getAllByRole("listitem");

    expect(todoItemNodes.length).toBeLessThan(3);
    expect(todoItemNodes.length).toBe(1);
  });
});
