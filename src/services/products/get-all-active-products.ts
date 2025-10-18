import ProductRepository from "@/repositories/ProductRepository"

export async function getAllActiveProductsService() {
  const result = await ProductRepository.getAllActiveProducts();

  return {
    status: "success",
    message: "Fetched all active products",
    data: result,
  }
}