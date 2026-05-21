import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { getProducts } from "@/modules/products/application/get-products.use-case";
import { ProductGrid } from "@/modules/products/presentation/components/ProductGrid";
import Link from "next/link";

interface HomePageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { page } = await searchParams;

  const currentPage = Number(page ?? 1);
  const limit = 20;

  const productsResponse = await getProducts(currentPage, limit);

  const totalPages = Math.ceil(productsResponse.total / limit);

  return (
    <main className="bg-light py-6">
      <Container>
        <div className="mb-5">
          <h1 className="text-xl font-semibold text-gray-900">
            Productos destacados
          </h1>
          <p className="mt-1 text-sm text-grey-666">
            Explorá productos disponibles en Bidcom.
          </p>
        </div>

        <ProductGrid products={productsResponse.products} />

        <div className="mt-8 flex items-center justify-center gap-3">
          {currentPage > 1 && (
            <Link
              href={`/?page=${currentPage - 1}`}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
              Anterior
            </Link>
          )}

          <span className="text-sm text-grey-666">
            Página {currentPage} de {totalPages}
          </span>

          {currentPage < totalPages && (
            <Link
              href={`/?page=${currentPage + 1}`}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
              Siguiente
            </Link>
          )}
        </div>
      </Container>
    </main>
  );
}
