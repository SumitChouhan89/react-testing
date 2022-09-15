import { renderHook } from "@testing-library/react";
import { useCount } from "./use-counter";

describe("useCounter", () => {
  test("should render the initial count", () => {
    const { result } = renderHook(useCount);
    expect(result.current.count).toBe(0);
  });

  test("should accept and render the same initial count", () => {
    const { result } = renderHook(useCount, {
      initialProps: {
        initialCount: 10,
      },
    });
    expect(result.current.count).toBe(10);
  });
});
