import type { Product } from "../domain/product.entity";
import type { ProductRepository } from "../domain/product.repository";
import type { ProductsResponse } from "../domain/product-response.entity";

const BASE_URL = process.env.NEXT_PUBLIC_DUMMYJSON_API_URL;

export class DummyJsonProductsRepository implements ProductRepository {
  async getProducts(limit = 20, skip = 0): Promise<ProductsResponse> {
    const params = new URLSearchParams({
      limit: String(limit),
      skip: String(skip),
    });

    const response = await fetch(`${BASE_URL}/products?${params.toString()}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  }

  async searchProducts(query: string, limit = 20): Promise<ProductsResponse> {
    const params = new URLSearchParams({
      q: query,
      limit: String(limit),
    });

    const response = await fetch(
      `${BASE_URL}/products/search?${params.toString()}`,
      {
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    return response.json();
  }
  async getProductBySku(sku: string): Promise<Product | null> {
    const response = await fetch(`${BASE_URL}/products?limit=200`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }

    const data: ProductsResponse = await response.json();

    const product =
      data.products.find((product) => product.sku === sku) ?? null;

    return product;
  }

  async getCategories(limit = 5): Promise<string[]> {
    const response = await fetch(`${BASE_URL}/products/categories`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch categories");
    }

    const categories = await response.json();

    return categories
      .map((category: string | { slug?: string; name?: string }) => {
        if (typeof category === "string") return category;

        return category.slug ?? category.name ?? "";
      })
      .filter(Boolean)
      .slice(0, limit);
  }
}
