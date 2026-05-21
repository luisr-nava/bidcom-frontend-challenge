import type { Product } from "./product.entity";
import type { ProductsResponse } from "./product-response.entity";

export interface ProductRepository {
  searchProducts(query: string, limit?: number): Promise<ProductsResponse>;
  getProductBySku(sku: string): Promise<Product | null>;
  getCategories(limit?: number): Promise<string[]>;
}
