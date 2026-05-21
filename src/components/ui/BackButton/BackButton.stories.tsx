import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { BackButton } from "./BackButton";

const meta: Meta<typeof BackButton> = {
  title: "UI/BackButton",
  component: BackButton,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        back: () => {
          console.log("router.back");
        },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="rounded-md bg-white p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof BackButton>;

export const Default: Story = {
  args: {
    label: "Volver",
  },
};

export const WithHref: Story = {
  args: {
    label: "Volver al inicio",
    href: "/",
  },
};
