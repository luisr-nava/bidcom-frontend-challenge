import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { SearchBar } from "./SearchBar";

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("SearchBar", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("redirects to search page with trimmed query", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("¿Qué estás buscando?");

    fireEvent.change(input, {
      target: {
        value: " iphone 15 ",
      },
    });

    fireEvent.submit(input.closest("form")!);

    expect(pushMock).toHaveBeenCalledWith("/search?s=iphone%2015");
  });

  it("does not redirect when query is empty", () => {
    render(<SearchBar />);

    const input = screen.getByPlaceholderText("¿Qué estás buscando?");

    fireEvent.change(input, {
      target: {
        value: "   ",
      },
    });

    fireEvent.submit(input.closest("form")!);

    expect(pushMock).not.toHaveBeenCalled();
  });
});
