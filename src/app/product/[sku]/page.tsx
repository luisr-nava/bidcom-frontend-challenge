import Image from "next/image";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";

import { Container } from "@/components/layout/Container";

import { getProductBySku } from "@/modules/products/application/get-product-by-sku.use-case";

import { PriceInfo } from "@/modules/products/presentation/components/PriceInfo";

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
          <div className="space-y-4">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-md bg-gray-100">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain p-6"
              />
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.images.slice(0, 4).map((image) => (
                <div
                  key={image}
                  className="relative aspect-square overflow-hidden rounded border border-gray-200 bg-gray-100">
                  <Image
                    src={image}
                    alt={product.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm text-grey-666">{product.category}</p>

            <h1 className="text-2xl font-semibold text-gray-900">
              {product.title}
            </h1>

            <div className="mt-3 flex items-center gap-2">
              <Star size={18} className="fill-yellow-400 text-yellow-400" />

              <span className="text-sm font-medium text-gray-700">
                {product.rating}
              </span>
            </div>

            <div className="mt-6">
              <PriceInfo
                price={product.price}
                discountPercentage={product.discountPercentage}
              />
            </div>

            <div className="mt-6 rounded-md border border-gray-200 bg-gray-50 p-4">
              <p className="text-sm text-gray-700">
                Stock disponible:{" "}
                <span className="font-semibold">{product.stock}</span>
              </p>

              <p className="mt-2 text-sm text-gray-700">
                Marca:{" "}
                <span className="font-semibold">
                  {product.brand ?? "Sin marca"}
                </span>
              </p>

              <p className="mt-2 text-sm text-gray-700">
                Garantía:{" "}
                <span className="font-semibold">
                  {product.warrantyInformation}
                </span>
              </p>
            </div>

            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Descripción
              </h2>

              <p className="mt-2 text-sm leading-6 text-grey-666">
                {product.description}
              </p>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
