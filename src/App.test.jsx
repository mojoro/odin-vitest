import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("list contains 5 animals", () => {
  render(<App />);

  const listElement = screen.getByRole("list");
  const listItems = screen.getAllByRole("listItem");

  expect(listElement).toBeInTheDocument();
  expect(listElement).toHaveClass("animals");
  expect(listItems.length).toEqual(5);
});
