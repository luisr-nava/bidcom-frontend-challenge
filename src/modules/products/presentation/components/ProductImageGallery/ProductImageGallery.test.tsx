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

    expect(screen.getByAltText("iPhone")).toBeInTheDocument();
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

    const secondThumbnail = screen.getByAltText("iPhone 2");

    fireEvent.click(secondThumbnail);

    expect(screen.getByAltText("iPhone")).toHaveAttribute(
      "src",
      expect.stringContaining("Image+2"),
    );
  });
});
