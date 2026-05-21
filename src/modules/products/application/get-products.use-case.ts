import { DummyJsonProductsRepository } from "../infrastructure/dummy-json-products.repository";

const productsRepository = new DummyJsonProductsRepository();

export async function getProducts(page = 1, limit = 20) {
  const skip = (page - 1) * limit;

  return productsRepository.getProducts(limit, skip);
}

