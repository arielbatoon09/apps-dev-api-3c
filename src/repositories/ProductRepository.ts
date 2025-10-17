import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const ProductRepository = {
  async create(data: { name: string, description: string, price: number, stock: number }) {
    return prisma.product.create({ data });
  }
}