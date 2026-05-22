import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { EmptyProductsState } from "./EmptyProductsState";

const mockCategories = ["smartphones", "laptops", "fragrances"];
describe("EmptyProductsState", () => {
  it("renders empty message and category links", () => {
    render(
      <EmptyProductsState
        categories={mockCategories}
      />,
    );

    expect(screen.getByText("No se encontró ningún producto.")).toBeDefined();

    expect(
      screen.getByText("Te recomendamos buscar estas categorías"),
    ).toBeDefined();

    expect(screen.getByRole("link", { name: "smartphones" })).toHaveAttribute(
      "href",
      "/search?s=smartphones",
    );

    expect(screen.getByRole("link", { name: "laptops" })).toHaveAttribute(
      "href",
      "/search?s=laptops",
    );

    expect(screen.getByRole("link", { name: "fragrances" })).toHaveAttribute(
      "href",
      "/search?s=fragrances",
    );
  });
});
