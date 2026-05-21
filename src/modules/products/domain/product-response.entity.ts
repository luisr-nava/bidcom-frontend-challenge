import type { Product } from "./product.entity";

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
