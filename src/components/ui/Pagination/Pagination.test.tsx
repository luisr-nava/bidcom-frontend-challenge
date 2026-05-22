import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("renders page links and marks the current page", () => {
    render(<Pagination currentPage={2} totalPages={5} />);

    expect(screen.getByRole("link", { name: "1" })).toHaveAttribute(
      "href",
      "/",
    );

    expect(screen.getByRole("link", { name: "2" })).toHaveAttribute(
      "aria-current",
      "page",
    );

    expect(screen.getByRole("link", { name: "3" })).toHaveAttribute(
      "href",
      "/?page=3",
    );
    expect(screen.getByText("2")).toBeDefined();
  });

  it("renders previous link to the first page as root", () => {
    render(<Pagination currentPage={2} totalPages={5} />);

    expect(screen.getByRole("link", { name: "Anterior" })).toHaveAttribute(
      "href",
      "/",
    );
  });

  it("renders next link when not on last page", () => {
    render(<Pagination currentPage={2} totalPages={5} />);

    expect(screen.getByRole("link", { name: "Siguiente" })).toHaveAttribute(
      "href",
      "/?page=3",
    );
  });

  it("disables previous link on first page", () => {
    render(<Pagination currentPage={1} totalPages={5} />);

    expect(screen.getByRole("link", { name: "Anterior" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });

  it("disables next link on last page", () => {
    render(<Pagination currentPage={5} totalPages={5} />);

    expect(screen.getByRole("link", { name: "Siguiente" })).toHaveAttribute(
      "aria-disabled",
      "true",
    );
  });
});
