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
    dimensions: { width: 10, height: 15, depth: 1 },
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
    id: 2,
    sku: "GALAXY-S24",
    title: "Samsung Galaxy S24 Ultra",
    description: "Smartphone Samsung de alta gama.",
    category: "smartphones",
    price: 1649999,
    discountPercentage: 12,
    rating: 4.7,
    stock: 8,
    tags: ["samsung", "smartphone"],
    brand: "Samsung",
    weight: 1,
    dimensions: { width: 10, height: 15, depth: 1 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 24 hours",
    availabilityStatus: "In Stock",
    reviews: [],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      barcode: "987654321",
      qrCode: "https://dummyjson.com/image/100x100",
    },
    images: [],
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=Galaxy",
  },
  {
    id: 3,
    sku: "NOTEBOOK-ASUS",
    title: "Notebook Asus Zenbook OLED",
    description: "Notebook liviana con pantalla OLED.",
    category: "laptops",
    price: 2299999,
    discountPercentage: 15,
    rating: 4.6,
    stock: 5,
    tags: ["asus", "laptop"],
    brand: "Asus",
    weight: 2,
    dimensions: { width: 30, height: 20, depth: 2 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 48 hours",
    availabilityStatus: "In Stock",
    reviews: [],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      barcode: "456789123",
      qrCode: "https://dummyjson.com/image/100x100",
    },
    images: [],
    thumbnail:
      "https://dummyjson.com/image/400x400/ffffff/111111?text=Notebook",
  },
  {
    id: 4,
    sku: "HEADPHONES-SONY",
    title: "Sony WH-1000XM5",
    description: "Auriculares inalámbricos con cancelación de ruido.",
    category: "mobile-accessories",
    price: 799999,
    discountPercentage: 8,
    rating: 4.9,
    stock: 15,
    tags: ["sony", "audio"],
    brand: "Sony",
    weight: 1,
    dimensions: { width: 12, height: 18, depth: 8 },
    warrantyInformation: "1 year warranty",
    shippingInformation: "Ships in 24 hours",
    availabilityStatus: "In Stock",
    reviews: [],
    returnPolicy: "30 days return policy",
    minimumOrderQuantity: 1,
    meta: {
      createdAt: "2024-01-01T00:00:00.000Z",
      updatedAt: "2024-01-01T00:00:00.000Z",
      barcode: "321654987",
      qrCode: "https://dummyjson.com/image/100x100",
    },
    images: [],
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=Sony",
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
    products: products.slice(0, 2),
  },
};

export const SingleProduct: Story = {
  args: {
    products: products.slice(0, 1),
  },
};

export const Empty: Story = {
  args: {
    products: [],
  },
};
