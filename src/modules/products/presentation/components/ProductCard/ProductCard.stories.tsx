import type { Meta, StoryObj } from "@storybook/react";
import { ProductCard } from "./ProductCard";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-70">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    sku: "MOB-APP-APP-101",
    title: "Apple iPhone 15 Pro Max 256GB",
    price: 1899999,
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone",
  },
};

export const LongTitle: Story = {
  args: {
    sku: "MON-SAM-ODYSSEY-49",
    title:
      "Monitor Gamer Samsung Odyssey UltraWide 49 pulgadas QHD 240Hz HDR Compatible con NVIDIA G-Sync",
    price: 2499999,
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=Monitor",
  },
};

export const LowPrice: Story = {
  args: {
    sku: "ACC-GEN-001",
    title: "Cable USB-C de carga rápida",
    price: 8999,
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=USB-C",
  },
};
