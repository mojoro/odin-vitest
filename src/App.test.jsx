import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./accordion";

test("can open accordion items to see the contents", async () => {
  const hats = { title: "Favorite Hats", contents: "Fedoras are classy" };
  const footware = {
    title: "Favorite Footware",
    contents: "Flipflops are the best",
  };
  render(<Accordion items={[hats, footware]} />);

  expect(screen.getByText(hats.contents)).toBeInTheDocument();
  expect(screen.queryByText(footware.contents)).not.toBeInTheDocument();

  await userEvent.click(screen.getByText(footware.title));

  expect(screen.getByText(footware.contents)).toBeInTheDocument();
  expect(screen.queryByText(hats.contents)).not.toBeInTheDocument();
});
