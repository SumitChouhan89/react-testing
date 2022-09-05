import { render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  test("Renders Correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("Renders List of skills", () => {
    render(<Skills skills={skills} />);
    const listElements = screen.getAllByRole("listitem");
    expect(listElements).toHaveLength(skills.length);
  });

  test("Renders h1 tag", () => {
    render(<Skills skills={skills} />);
    const headingElement = screen.getByText(/are List/i);
    expect(headingElement).toBeInTheDocument();
  });
});
