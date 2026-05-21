import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { EmptyProductsState } from "./EmptyProductsState";

describe("EmptyProductsState", () => {
  it("renders empty message and category links", () => {
    render(
      <EmptyProductsState
        categories={["smartphones", "laptops", "fragrances"]}
      />,
    );

    expect(
      screen.getByText("No se encontró ningún producto."),
    ).toBeInTheDocument();

    expect(
      screen.getByText("Te recomendamos buscar estas categorías"),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "smartphones" })).toHaveAttribute(
      "href",
      "/search?s=smartphones",
    );

    expect(screen.getByRole("link", { name: "laptops" })).toHaveAttribute(
      "href",
      "/search?s=laptops",
    );
  });
});
