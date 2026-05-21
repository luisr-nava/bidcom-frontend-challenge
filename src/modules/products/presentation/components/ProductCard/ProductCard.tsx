import Image from "next/image";
import Link from "next/link";

import type { ProductCardProps } from "./ProductCard.types";

export function ProductCard({
  sku,
  title,
  price,
  thumbnail,
}: ProductCardProps) {
  return (
    <Link
      href={`/product/${sku}`}
      className="group block overflow-hidden rounded-md border border-gray-200 bg-white transition-shadow hover:shadow-md">
      <div className="relative aspect-square bg-gray-100">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="space-y-2 p-4">
        <h3 className="line-clamp-2 text-sm font-medium text-gray-900">
          {title}
        </h3>

        <p className="text-xl font-bold text-gray-900">
          ${price.toLocaleString("es-AR")}
        </p>
      </div>
    </Link>
  );
}
