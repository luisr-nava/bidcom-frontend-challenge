import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProductGrid } from "./ProductGrid";

const products = [
  {
    id: 1,
    sku: "IPHONE-15",
    title: "iPhone 15 Pro Max",
    description: "Smartphone Apple de última generación.",
    category: "smartphones",
    price: 1899999,
    discountPercentage: 10,
    rating: 4.8,
    stock: 12,
    tags: ["apple", "smartphone"],
    brand: "Apple",
    weight: 1,
    dimensions: {
      width: 10,
      height: 15,
      depth: 1,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 24 hours",
    availabilityStatus: "In Stock",
    reviews: [],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      barcode: "123456789",
      qrCode: "https://dummyjson.com/image/100x100",
    },
    images: [],
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone",
  },
  {
    id: 1,
    sku: "IPHONE-15",
    title: "iPhone 15 Pro Max",
    description: "Smartphone Apple de última generación.",
    category: "smartphones",
    price: 1899999,
    discountPercentage: 10,
    rating: 4.8,
    stock: 12,
    tags: ["apple", "smartphone"],
    brand: "Apple",
    weight: 1,
    dimensions: {
      width: 10,
      height: 15,
      depth: 1,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 24 hours",
    availabilityStatus: "In Stock",
    reviews: [],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      barcode: "123456789",
      qrCode: "https://dummyjson.com/image/100x100",
    },
    images: [],
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone",
  },
  {
    id: 1,
    sku: "IPHONE-15",
    title: "iPhone 15 Pro Max",
    description: "Smartphone Apple de última generación.",
    category: "smartphones",
    price: 1899999,
    discountPercentage: 10,
    rating: 4.8,
    stock: 12,
    tags: ["apple", "smartphone"],
    brand: "Apple",
    weight: 1,
    dimensions: {
      width: 10,
      height: 15,
      depth: 1,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 24 hours",
    availabilityStatus: "In Stock",
    reviews: [],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      barcode: "123456789",
      qrCode: "https://dummyjson.com/image/100x100",
    },
    images: [],
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone",
  },
  {
    id: 1,
    sku: "IPHONE-15",
    title: "iPhone 15 Pro Max",
    description: "Smartphone Apple de última generación.",
    category: "smartphones",
    price: 1899999,
    discountPercentage: 10,
    rating: 4.8,
    stock: 12,
    tags: ["apple", "smartphone"],
    brand: "Apple",
    weight: 1,
    dimensions: {
      width: 10,
      height: 15,
      depth: 1,
    },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 24 hours",
    availabilityStatus: "In Stock",
    reviews: [],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      barcode: "123456789",
      qrCode: "https://dummyjson.com/image/100x100",
    },
    images: [],
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone",
  },
];

const meta: Meta<typeof ProductGrid> = {
  title: "Modules/ProductGrid",
  component: ProductGrid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductGrid>;

export const Default: Story = {
  args: {
    products,
  },
};

export const TwoProducts: Story = {
  args: {
    products: products,
  },
};

export const SingleProduct: Story = {
  args: {
    products: products,
  },
};

export const Empty: Story = {
  args: {
    products: [],
  },
};

