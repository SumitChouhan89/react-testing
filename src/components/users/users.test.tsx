import { render, screen } from "@testing-library/react";
import { Users } from "./users";

describe("Users Component", () => {
  test("Renders Correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });
});
