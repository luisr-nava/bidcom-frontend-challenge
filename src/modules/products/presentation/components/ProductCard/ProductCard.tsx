import Image from "next/image";
import Link from "next/link";
import { Star, CreditCard } from "lucide-react";

import type { ProductCardProps } from "./ProductCard.types";

export function ProductCard({
  sku,
  title,
  price,
  thumbnail,
  rating,
  discountPercentage,
  stock,
}: ProductCardProps) {
  const originalPrice = price / (1 - discountPercentage / 100);
  const hasStock = stock > 0;

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

      <div className="space-y-2 p-4 text-center">
        <p className="text-[10px] uppercase text-grey-666">Cod. {sku}</p>

        {hasStock && (
          <span className="inline-flex rounded bg-blue-400 px-2 py-1 text-[10px] font-bold uppercase text-white">
            Recomendado
          </span>
        )}

        <div className="flex items-center justify-center gap-1 text-xs text-gray-700">
          <span>{rating.toFixed(1)}</span>

          <div className="flex text-azul-bidcom">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={12}
                className={
                  index < Math.round(rating)
                    ? "fill-azul-bidcom"
                    : "fill-transparent"
                }
              />
            ))}
          </div>
        </div>

        <h3 className="line-clamp-2 min-h-10 text-sm font-medium text-gray-900">
          {title}
        </h3>

        <p className="text-sm font-medium text-green-700">
          {hasStock ? "Llega mañana o ¡Retiralo ya!" : "Sin stock disponible"}
        </p>

        <div>
          <p className="text-sm text-grey-666 line-through">
            ${originalPrice.toLocaleString("es-AR")}
          </p>

          <div className="flex items-end justify-center gap-2">
            <p className="text-2xl font-bold text-gray-900">
              ${price.toLocaleString("es-AR")}
            </p>

            <span className="pb-1 text-xs font-semibold text-green-700">
              {discountPercentage.toFixed(0)}% OFF
            </span>
          </div>
        </div>

        <div className="mx-auto inline-flex items-center gap-1 rounded bg-green-50 px-2 py-1 text-[11px] font-medium uppercase text-green-700">
          <CreditCard size={12} />
          Desde 12 cuotas sin interés
        </div>
      </div>
    </Link>
  );
}
