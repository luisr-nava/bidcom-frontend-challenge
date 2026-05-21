import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <div className="rounded-md bg-azul-bidcom p-6 text-white">
        Contenido dentro del Container
      </div>
    </Container>
  ),
};

export const WithGrid: Story = {
  render: () => (
    <Container>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-md bg-gray-200 p-6 text-center">
            Card {index + 1}
          </div>
        ))}
      </div>
    </Container>
  ),
};

export const FullLayout: Story = {
  render: () => (
    <div className="bg-light py-10">
      <Container>
        <div className="space-y-6">
          <div className="rounded-md bg-azul-bidcom p-8 text-white">Header</div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="h-40 rounded-md bg-gray-200" />
            <div className="h-40 rounded-md bg-gray-200" />
            <div className="h-40 rounded-md bg-gray-200" />
          </div>
        </div>
      </Container>
    </div>
  ),
};

