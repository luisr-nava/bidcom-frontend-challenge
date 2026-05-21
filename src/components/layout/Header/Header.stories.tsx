import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../Container";
import { SearchBar } from "@/components/ui/SearchBar";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Layout/Header",
  component: Header,
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
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  parameters: {
    layout: "fullscreen",
  },
};
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export const Mobile: Story = {
  render: () => (
    <div className="w-97.5">
      <header className="bg-azul-bidcom py-4 shadow-sm">
        <Container className="max-w-full">
          <div className="grid grid-cols-1 items-center gap-4 pt-2">
            <Link href="/" className="mx-auto">
              <Image
                src="/logo_bidcom.svg"
                alt="Bidcom"
                width={130}
                height={36}
                priority
              />
            </Link>

            <div className="mx-auto w-full max-w-175 px-6">
              <SearchBar />
            </div>
          </div>
        </Container>
      </header>
    </div>
  ),
};

