import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductReviews } from "./ProductReviews";

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
  reviews: [
    {
      rating: 5,
      comment: "Great product!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Savannah Gomez",
      reviewerEmail: "savannah.gomez@x.dummyjson.com",
    },
    {
      rating: 4,
      comment: "Awesome product!",
      date: "2025-04-30T09:41:02.053Z",
      reviewerName: "Christian Perez",
      reviewerEmail: "christian.perez@x.dummyjson.com",
    },
  ],
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

describe("ProductReviews", () => {
  it("renders product reviews summary and review list", () => {
    render(<ProductReviews product={product} />);

    expect(screen.getByText("Opiniones")).toBeDefined();
    expect(screen.getByText("2.9")).toBeDefined();
    expect(screen.getByText("En promedio de 2 opiniones")).toBeDefined();

    expect(screen.getByText("Savannah Gomez")).toBeDefined();
    expect(screen.getByText("Great product!")).toBeDefined();

    expect(screen.getByText("Christian Perez")).toBeDefined();
    expect(screen.getByText("Awesome product!")).toBeDefined();
  });
});
