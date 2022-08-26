import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

describe("Greet", () => {
  test("greet renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText(/Hello/i);
    expect(textElement).toBeInTheDocument();
  });
});

describe("Nested", () => {
  test("greet renders with a name", () => {
    render(<Greet name="Sumit" />);
    const textElement = screen.getByText("Hello Sumit");
    expect(textElement).toBeInTheDocument();
  });
});

test("To have the particular className", () => {
  render(<Greet />);
  const textElement = screen.getByText(/Hello/i);
  expect(textElement).toHaveClass("div-class");
});
