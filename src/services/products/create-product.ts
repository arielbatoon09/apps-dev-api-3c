import { ProductRepository } from "@/repositories/ProductRepository";

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  stock: number;
}

export const createProductService = async (data: CreateProductData) => {
  // Validate if fields are provided
  if (!data.name || !data.description || data.price == null || data.stock == null) {
    throw new Error("All fields are required");
  }

  // To check if price and stock are valid numbers
  if (data.price < 0 || data.stock < 0) {
    throw new Error("Price cannot be negative");
  }

  // Create Product
  return ProductRepository.create({
    name: data.name,
    description: data.description,
    price: data.price,
    stock: data.stock
  });
}