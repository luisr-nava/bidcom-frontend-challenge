import { SearchX } from "lucide-react";

import type { EmptyProductsStateProps } from "./EmptyProductsState.types";
import Link from "next/link";

export function EmptyProductsState({ categories }: EmptyProductsStateProps) {
  return (
    <section className="rounded-md border border-gray-200 bg-white p-6 text-center">
      <SearchX className="mx-auto mb-3 text-grey-666" size={40} />

      <h2 className="text-lg font-semibold text-gray-900">
        No se encontró ningún producto.
      </h2>

      <p className="mt-1 text-sm text-grey-666">
        Te recomendamos buscar estas categorías
      </p>

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Link
            key={category}
            href={`/search?s=${encodeURIComponent(category)}`}
            className="rounded-full border border-azul-bidcom px-4 py-2 text-sm font-semibold text-azul-bidcom transition-colors hover:bg-azul-bidcom hover:text-white">
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
