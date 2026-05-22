import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";

import { getProductBySku } from "@/modules/products/application/get-product-by-sku.use-case";

import { BackButton } from "@/components/ui/BackButton";
import { ProductImageGallery } from "@/modules/products/presentation/components/ProductImageGallery";
import { ProductPurchasePanel } from "@/modules/products/presentation/components/ProductPurchasePanel";
import { ProductDetailsSection } from "@/modules/products/presentation/components/ProductDetailsSection";
import { ProductReviews } from "@/modules/products/presentation/components/ProductReviews";

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
    <main className="min-h-[calc(100vh-72px)] bg-light pt-8">
      <Container>
        <div className="mb-4">
          <BackButton />
        </div>
        <section className="grid gap-8 rounded-md bg-white p-6 md:grid-cols-2">
          <ProductImageGallery
            title={product.title}
            thumbnail={product.thumbnail}
            images={product.images}
          />
          <ProductPurchasePanel product={product} />
        </section>
      </Container>
      <ProductDetailsSection product={product} />
      <ProductReviews product={product} />
    </main>
  );
}
