import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    basePath: "/",
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    basePath: "/",
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    basePath: "/",
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    basePath: "/",
  },
};

