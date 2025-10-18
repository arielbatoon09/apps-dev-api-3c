import ProductRepository from "@/repositories/ProductRepository";

// Hard Delete Function
export async function hardDeleteProductService(id: string) {
  // Check if Product ID is provided
  if (!id) {
    return { status: "error", message: "Please provide Product ID!" };
  }

  // Check if Product ID is existing
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product Not Found!" };
  }

  // Delete Product
  await ProductRepository.hardDelete(id);

  return {
    status: "success",
    message: `Deleted Product ${id} Successfully!`,
    data: null
  }
}

// Soft Delete Function
export async function softDeleteProductService(id: string) {
  // Check if Product ID is provided
  if (!id) {
    return { status: "error", message: "Please provide Product ID!" };
  }

  // Check if Product ID is existing
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product Not Found!" };
  }

  // Deactivate Product
  await ProductRepository.softDelete(id);

  return {
    status: "success",
    message: `Deactivated Product ${id} Successfully!`,
    data: null
  }
}