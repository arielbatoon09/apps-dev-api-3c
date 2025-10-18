import ProductRepository from "@/repositories/ProductRepository"

export async function getAllProductsService() {
  const result = await ProductRepository.getAllProducts();

  return {
    status: "success",
    message: "Fetched all products!",
    data: result
  }
}