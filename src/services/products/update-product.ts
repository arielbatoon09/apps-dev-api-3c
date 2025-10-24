import ProductRepository from "@/repositories/ProductRepository";
import { ProductData } from "@/types/product";

// Update Product
export async function updateProductService(id: string, data: ProductData) {
  // Check if Product ID is provided
  if (!id) {
    return { status: "error", message: "Please provide Product ID!" };
  }

  // Check if Product exist
  const existingProduct = await ProductRepository.findById(id);
  if (!existingProduct) {
    return { status: "error", message: "Product Not Found!" };
  }

  // Check if Price and Stock are valid numbers
  if (data.price < 1 || data.stock < 1) {
    return { status: "error", message: "Price / stock should be valid numbers." };
  }

  // Update Product
  const result = await ProductRepository.update(id, data);

  return {
    status: "success",
    message: "Updated Product Successfully!",
    data: result
  }
}

// Restore / Update isActive Column in the Product
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