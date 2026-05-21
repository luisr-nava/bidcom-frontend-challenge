import type { PriceInfoProps } from "./PriceInfo.types";

export function PriceInfo({ price, discountPercentage }: PriceInfoProps) {
  const originalPrice = price / (1 - discountPercentage / 100);

  return (
    <div className="space-y-1">
      <p className="text-sm text-grey-666 line-through">
        ${originalPrice.toLocaleString("es-AR")}
      </p>

      <div className="flex items-center gap-3">
        <p className="text-3xl font-bold text-gray-900">
          ${price.toLocaleString("es-AR")}
        </p>

        <span className="rounded bg-green-discount px-2 py-1 text-xs font-bold text-white">
          -{discountPercentage.toFixed(0)}%
        </span>
      </div>
    </div>
  );
}
