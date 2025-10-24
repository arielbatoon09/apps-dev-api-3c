import ProductRepository from "@/repositories/ProductRepository"

// Get All Products regardless if Active or not
export async function getAllProductsService() {
  const result = await ProductRepository.getAllProducts();

  return {
    status: "success",
    message: "Fetched all products!",
    data: result
  }
}

// Get Only Active Products
export async function getAllActiveProductsService() {
  const result = await ProductRepository.getAllActiveProducts();

  return {
    status: "success",
    message: "Fetched all active products",
    data: result,
  }
}

// Get Product by ID
export async function getProductByIdService(id: string) {
  // Check if Product ID is provided
  if (!id) {
    return { status: "error", message: "Please provide Product ID!" };
  }

  // Check if Product exist
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product Not Found!" };
  }

  return {
    status: "success",
    message: "Fetched all active products",
    data: existingProduct,
  }

}