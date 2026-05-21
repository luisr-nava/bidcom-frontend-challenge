import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ProductImageGallery } from "./ProductImageGallery";

const meta: Meta<typeof ProductImageGallery> = {
  title: "Modules/ProductImageGallery",
  component: ProductImageGallery,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-xl rounded-xl bg-light p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductImageGallery>;

export const Default: Story = {
  args: {
    title: "iPhone 15 Pro Max",
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone",
    images: [
      "https://dummyjson.com/image/400x400/ffffff/111111?text=iPhone+1",
      "https://dummyjson.com/image/400x400/eeeeee/111111?text=iPhone+2",
      "https://dummyjson.com/image/400x400/dddddd/111111?text=iPhone+3",
      "https://dummyjson.com/image/400x400/cccccc/111111?text=iPhone+4",
    ],
  },
};

export const SingleImage: Story = {
  args: {
    title: "MacBook Pro",
    thumbnail: "https://dummyjson.com/image/400x400/ffffff/111111?text=MacBook",
    images: [],
  },
};
