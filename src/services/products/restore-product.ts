import ProductRepository from "@/repositories/ProductRepository";

export async function restoreProductService(id: string) {
  // Check if Product ID is provided
  if (!id) {
    return { status: "error", message: "Please provide Product ID!" };
  }

  // Check if Product ID is existing
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product Not Found!" };
  }

  // Activate Product
  const result = await ProductRepository.restore(id);

  return {
    status: "success",
    message: `Activated Product ${id} Successfully!`,
    data: result
  }
}