import React from "react";
import { render, screen } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import App from "./App";

import { Input } from "./App";

const user = UserEvent.setup();
test("call the callback every time input value is changed", async () => {
  const handleChange = vi.fn();

  render(<Input handleChange={handleChange} inputValue="" />);

  const input = screen.getByRole("textbox");
  await user.type(input, "React");

  expect(handleChange).toHaveBeenCalledTimes(5);
});

test("input value is updated correctly", async () => {
  render(<App />);

  const input = screen.getByRole("textbox");
  await user.type(input, "React");
  expect(input.value).toBe("React");
});
