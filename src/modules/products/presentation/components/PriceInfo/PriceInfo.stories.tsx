import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { PriceInfo } from "./PriceInfo";

const meta: Meta<typeof PriceInfo> = {
  title: "Modules/PriceInfo",
  component: PriceInfo,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-sm rounded-md border border-gray-200 bg-white p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PriceInfo>;

export const Default: Story = {
  args: {
    price: 1899999,
    discountPercentage: 15,
  },
};

export const SmallDiscount: Story = {
  args: {
    price: 89999,
    discountPercentage: 5,
  },
};

export const BigDiscount: Story = {
  args: {
    price: 499999,
    discountPercentage: 50,
  },
};

export const CheapProduct: Story = {
  args: {
    price: 9999,
    discountPercentage: 10,
  },
};

