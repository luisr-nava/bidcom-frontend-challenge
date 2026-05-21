import { DummyJsonProductsRepository } from "../infrastructure/dummy-json-products.repository";

const productsRepository = new DummyJsonProductsRepository();

export async function getProductsBySearch(query: string) {
  return productsRepository.searchProducts(query);
}
