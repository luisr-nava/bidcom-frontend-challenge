import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ProductGrid } from "./ProductGrid";
const mockProducts = [
  {
    id: 1,
    sku: "IPHONE-15",
    title: "iPhone 15",
    description: "Smartphone Apple",
    category: "smartphones",
    price: 1500000,
    discountPercentage: 10,
    rating: 4.8,
    stock: 10,
    tags: [],
    brand: "Apple",
    weight: 1,
    dimensions: {
      width: 1,
      height: 1,
      depth: 1,
    },
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    reviews: [],
    returnPolicy: "",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "",
      updatedAt: "",
      barcode: "",
      qrCode: "",
    },
    images: [],
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone",
  },
  {
    id: 2,
    sku: "GALAXY-S24",
    title: "Samsung Galaxy S24",
    description: "Smartphone Samsung",
    category: "smartphones",
    price: 1200000,
    discountPercentage: 15,
    rating: 4.7,
    stock: 8,
    tags: [],
    brand: "Samsung",
    weight: 1,
    dimensions: {
      width: 1,
      height: 1,
      depth: 1,
    },
    warrantyInformation: "",
    shippingInformation: "",
    availabilityStatus: "",
    reviews: [],
    returnPolicy: "",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "",
      updatedAt: "",
      barcode: "",
      qrCode: "",
    },
    images: [],
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=Samsung",
  },
];
describe("ProductGrid", () => {
  it("renders all product cards", () => {
    render(<ProductGrid products={mockProducts} />);

    expect(screen.getByText("iPhone 15")).toBeDefined();

    expect(screen.getByText("Samsung Galaxy S24")).toBeDefined();

    expect(screen.getAllByRole("link")).toHaveLength(2);
  });
});
