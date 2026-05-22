import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductCard } from "./ProductCard";

describe("ProductCard", () => {
  it("renders product information and links to product detail", () => {
    render(
      <ProductCard
        sku="MOB-APP-APP-101"
        title="iPhone 15 Pro Max"
        price={1899999}
        thumbnail="https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone"
      />,
    );

    expect(screen.getByText("iPhone 15 Pro Max")).toBeDefined();
    expect(screen.getByText("$1.899.999")).toBeDefined();

    const link = screen.getByRole("link");

    expect(link).toHaveAttribute("href", "/product/MOB-APP-APP-101");
    expect(screen.getByAltText("iPhone 15 Pro Max")).toBeDefined();
  });
});

