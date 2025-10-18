import ProductRepository from "@/repositories/ProductRepository";
import { ProductData } from "@/types/product";

export async function createProductService (data: ProductData) {
  // Validate if fields are provided
  if (!data.name || !data.description || data.price == null || data.stock == null) {
    return {
      status: "error",
      message: "Missing fields."
    }
  }

  // To check if price and stock are valid numbers
  if (data.price < 1 || data.stock < 1) {
    return {
      status: "error",
      message: "Price / stock should be valid numbers."
    }
  }

  // Create Product
  const result = await ProductRepository.create({
    name: data.name,
    description: data.description,
    price: data.price,
    stock: data.stock
  });


  return {
    status: "success",
    message: "Product created successfully!",
    data: result
  }
}