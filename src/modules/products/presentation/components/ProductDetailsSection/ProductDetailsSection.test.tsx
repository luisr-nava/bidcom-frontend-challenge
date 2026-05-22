import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductDetailsSection } from "./ProductDetailsSection";

const product = {
  id: 2,
  title: "Eyeshadow Palette with Mirror",
  description:
    "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades.",
  category: "beauty",
  price: 19.99,
  discountPercentage: 18.19,
  rating: 2.86,
  stock: 34,
  tags: ["beauty", "eyeshadow"],
  brand: "Glamour Beauty",
  sku: "BEA-GLA-EYE-002",
  weight: 9,
  dimensions: {
    width: 9.26,
    height: 22.47,
    depth: 27.67,
  },
  warrantyInformation: "1 year warranty",
  shippingInformation: "Ships in 2 weeks",
  availabilityStatus: "In Stock",
  reviews: [],
  returnPolicy: "7 days return policy",
  minimumOrderQuantity: 20,
  meta: {
    createdAt: "2025-04-30T09:41:02.053Z",
    updatedAt: "2025-04-30T09:41:02.053Z",
    barcode: "9170275171413",
    qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
  },
  images: [
    "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
  ],
  thumbnail:
    "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
};

describe("ProductDetailsSection", () => {
  it("renders product details and specifications", () => {
    render(<ProductDetailsSection product={product} />);

    expect(screen.getAllByText("Glamour Beauty")).toHaveLength(2);
    expect(
      screen.getByText("Acerca de Eyeshadow Palette with Mirror"),
    ).toBeDefined();

    expect(screen.getByText(product.description)).toBeDefined();
    expect(screen.getByText("Características")).toBeDefined();

    expect(screen.getByText("BEA-GLA-EYE-002")).toBeDefined();
    expect(screen.getByText("9170275171413")).toBeDefined();
    expect(screen.getByText("beauty")).toBeInTheDocument();

    expect(screen.getByText("Peso: 9 kg")).toBeDefined();
    expect(
      screen.getByText("Dimensiones: 9.26 x 22.47 x 27.67 cm"),
    ).toBeDefined();

    expect(
      screen.getByText((content) => content.includes("In Stock")),
    ).toBeDefined();
    expect(screen.getByText("1 year warranty")).toBeDefined();
    expect(screen.getByText("Ships in 2 weeks")).toBeDefined();
  });
});

