import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductCardSkeleton } from "./ProductCardSkeleton";

const meta: Meta<typeof ProductCardSkeleton> = {
  title: "Components/ProductCardSkeleton",
  component: ProductCardSkeleton,
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

type Story = StoryObj<typeof ProductCardSkeleton>;

export const Default: Story = {};
