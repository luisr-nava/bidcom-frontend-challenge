import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductImageGallery } from "./ProductImageGallery";

describe("ProductImageGallery", () => {
  it("renders fallback thumbnail when images are empty", () => {
    render(
      <ProductImageGallery
        title="iPhone"
        thumbnail="https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone"
        images={[]}
      />,
    );

    expect(screen.getByAltText("iPhone")).toBeDefined();
  });

  it("changes selected image when clicking a thumbnail", () => {
    render(
      <ProductImageGallery
        title="iPhone"
        thumbnail="https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone"
        images={[
          "https://dummyjson.com/image/400x400/ffffff/111111?text=Image+1",
          "https://dummyjson.com/image/400x400/eeeeee/111111?text=Image+2",
        ]}
      />,
    );

    const secondThumbnail = screen.getByLabelText("Ver imagen 3 de iPhone");
    fireEvent.click(secondThumbnail);

    const mainImage = screen.getByAltText("iPhone");

    expect(mainImage.getAttribute("src")).toContain("Image%2B2");
  });
});
