import { ProductCard } from "../ProductCard";
import type { ProductGridProps } from "./ProductGrid.types";

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          sku={product.sku}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
          rating={product.rating}
          discountPercentage={product.discountPercentage}
          stock={product.stock}
        />
      ))}
    </section>
  );
}
