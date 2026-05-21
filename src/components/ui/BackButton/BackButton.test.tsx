import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { BackButton } from "./BackButton";

const backMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    back: backMock,
  }),
}));

describe("BackButton", () => {
  beforeEach(() => {
    backMock.mockClear();
  });

  it("renders as a link when href is provided", () => {
    render(<BackButton href="/" label="Volver al inicio" />);

    expect(
      screen.getByRole("link", { name: "Volver al inicio" }),
    ).toHaveAttribute("href", "/");
  });

  it("calls router back when href is not provided", () => {
    render(<BackButton label="Volver" />);

    fireEvent.click(screen.getByRole("button", { name: "Volver" }));

    expect(backMock).toHaveBeenCalledTimes(1);
  });
});
