import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { TodoList } from "../components";
import { Todo } from "../data";
import { TodosFilter } from "../enum";

describe("TodoList", () => {
  //TODO move to App.test.tsx
  it("should show all todos when some todos be added", () => {
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

  // should show all tods when todsFilter is default value all.
  // render(<TodoList todos={todos} onTodoChange={() => {}} />);
  it("should show active todos when filter is active", () => {
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

  it("should show complete todos when filter is complete", () => {
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
