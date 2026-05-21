import { DummyJsonProductsRepository } from "../infrastructure/dummy-json-products.repository";

const productsRepository = new DummyJsonProductsRepository();

export async function getCategories() {
  return productsRepository.getCategories();
}
