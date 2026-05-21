import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Buscar productos...",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "iPhone 15",
  },
};

export const Error: Story = {
  args: {
    placeholder: "Email",
    error: "El email es obligatorio",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Input deshabilitado",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "********",
  },
};

