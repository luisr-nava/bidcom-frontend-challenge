import { DummyJsonProductsRepository } from "../infrastructure/dummy-json-products.repository";

const productsRepository = new DummyJsonProductsRepository();

export async function getProductBySku(sku: string) {
  return productsRepository.getProductBySku(sku);
}
