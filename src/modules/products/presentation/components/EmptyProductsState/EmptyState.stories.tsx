import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { EmptyProductsState } from "./EmptyProductsState";

const meta: Meta<typeof EmptyProductsState> = {
  title: "Modules/EmptyProductsState",
  component: EmptyProductsState,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof EmptyProductsState>;

export const Default: Story = {
  args: {
    categories: ["smartphones", "laptops", "fragrances", "furniture"],
  },
};

export const ManyCategories: Story = {
  args: {
    categories: [
      "beauty",
      "fragrances",
      "furniture",
      "groceries",
      "home-decoration",
      "kitchen-accessories",
      "laptops",
      "mens-shirts",
    ],
  },
};

