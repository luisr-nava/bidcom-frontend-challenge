// src/app/product/[sku]/page.tsx

import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { getProductBySku } from "@/modules/products/application/get-product-by-sku.use-case";

interface ProductPageProps {
  params: Promise<{
    sku: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { sku } = await params;

  const product = await getProductBySku(sku);

  if (!product) {
    notFound();
  }

  return (
    <main className="bg-light py-8">
      <Container>
        <section className="grid gap-8 rounded-md bg-white p-6 md:grid-cols-2">
          <div className="flex items-center justify-center bg-gray-100 p-6">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="max-h-[420px] object-contain"
            />
          </div>

          <div>
            <p className="mb-2 text-sm text-grey-666">{product.category}</p>

            <h1 className="text-2xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <p className="mt-4 text-3xl font-bold text-gray-900">
              ${product.price.toLocaleString("es-AR")}
            </p>

            <p className="mt-4 text-sm leading-6 text-grey-666">
              {product.description}
            </p>

            <div className="mt-6 space-y-2 text-sm text-gray-700">
              <p>SKU: {product.sku}</p>
              <p>Stock: {product.stock}</p>
              <p>Marca: {product.brand ?? "Sin marca"}</p>
              <p>Garantía: {product.warrantyInformation}</p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
