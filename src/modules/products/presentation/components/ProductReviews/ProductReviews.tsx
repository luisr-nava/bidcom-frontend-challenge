import Image from "next/image";
import { Star } from "lucide-react";

import type { ProductReviewsProps } from "./ProductReviews.types";

export function ProductReviews({ product }: ProductReviewsProps) {
  if (product.reviews.length === 0) {
    return (
      <section className="mt-10 bg-white px-4 py-10">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-2xl font-semibold text-gray-900">Opiniones</h2>

          <p className="mt-4 text-sm text-grey-666">
            Este producto todavía no tiene opiniones.
          </p>
        </div>
      </section>
    );
  }
  return (
    <section className="mt-10 bg-white px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center gap-6 border-b border-gray-200 pb-3">
          <button className="border-b-2 border-azul-bidcom pb-2 text-lg font-semibold text-gray-900">
            Opiniones
          </button>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="text-5xl font-semibold text-gray-900">
            {product.rating.toFixed(1)}
          </span>

          <div>
            <div className="flex text-azul-bidcom">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  className={
                    index < Math.round(product.rating)
                      ? "fill-azul-bidcom"
                      : "fill-transparent"
                  }
                />
              ))}
            </div>

            <p className="text-sm text-grey-666">
              En promedio de {product.reviews.length} opiniones
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {product.reviews.map((review, index) => (
            <article
              key={`${review.reviewerEmail}-${index}`}
              className="flex gap-4">
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-md bg-gray-100">
                <Image
                  src={product.thumbnail}
                  alt={review.reviewerName}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div>
                <div className="flex text-azul-bidcom">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={16}
                      className={
                        starIndex < review.rating
                          ? "fill-azul-bidcom"
                          : "fill-transparent"
                      }
                    />
                  ))}
                </div>

                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {review.reviewerName}
                </h3>

                <p className="mt-1 text-sm text-grey-666">{review.comment}</p>

                <p className="mt-2 text-xs text-grey-666">
                  {new Date(review.date).toLocaleDateString("es-AR")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

