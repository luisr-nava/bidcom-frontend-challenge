import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SearchBar } from "./SearchBar";

const meta: Meta<typeof SearchBar> = {
  title: "UI/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        push: (url: string) => {
          console.log("router.push:", url);
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-2xl bg-[#ffe600] p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {};

