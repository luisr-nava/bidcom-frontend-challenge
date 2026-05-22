import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProductPurchasePanel } from "./ProductPurchasePanel";

const product = {
  id: 2,
  title: "Eyeshadow Palette with Mirror",
  description:
    "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks.",
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

const meta: Meta<typeof ProductPurchasePanel> = {
  title: "Modules/ProductPurchasePanel",
  component: ProductPurchasePanel,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-sm bg-light p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductPurchasePanel>;

export const Default: Story = {
  args: {
    product,
  },
};

export const OutOfStock: Story = {
  args: {
    product: {
      ...product,
      stock: 0,
      availabilityStatus: "Out of Stock",
    },
  },
};
