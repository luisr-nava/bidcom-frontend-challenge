import { Container } from "@/components/layout/Container";
import { getCategories } from "@/modules/products/application/get-categories.use-case";
import { getProductsBySearch } from "@/modules/products/application/get-products-by-search.use-case";
import { EmptyProductsState } from "@/modules/products/presentation/components/EmptyProductsState";
import { ProductGrid } from "@/modules/products/presentation/components/ProductGrid";

interface SearchPageProps {
  searchParams: Promise<{
    s?: string;
  }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { s } = await searchParams;

  const searchTerm = s?.trim() ?? "";
  const productsResponse = await getProductsBySearch(searchTerm);

  const hasProducts = productsResponse.products.length > 0;
  const categories = hasProducts ? [] : await getCategories();

  return (
    <main className="bg-light py-6">
      <Container>
        <div className="mb-5">
          <h1 className="text-xl font-semibold text-gray-900">
            Resultados de búsqueda
          </h1>

          {searchTerm && (
            <p className="mt-1 text-sm text-grey-666">
              Productos encontrados para:
              <span className="font-semibold">{searchTerm}</span>
            </p>
          )}
        </div>

        {hasProducts ? (
          <ProductGrid products={productsResponse.products} />
        ) : (
          <EmptyProductsState categories={categories} />
        )}
      </Container>
    </main>
  );
}
