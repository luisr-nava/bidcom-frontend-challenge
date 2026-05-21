import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PriceInfo } from "./PriceInfo";

describe("PriceInfo", () => {
  it("renders formatted current price", () => {
    render(<PriceInfo price={1500000} discountPercentage={20} />);

    expect(screen.getByText("$1.500.000")).toBeInTheDocument();
  });

  it("renders formatted original price", () => {
    render(<PriceInfo price={1500000} discountPercentage={20} />);

    expect(screen.getByText("$1.875.000")).toBeInTheDocument();
  });

  it("renders discount percentage", () => {
    render(<PriceInfo price={1500000} discountPercentage={20} />);

    expect(screen.getByText("-20%")).toBeInTheDocument();
  });
});
