import { PrismaClient } from "@prisma/client";
import { ProductData } from "@/types/product";

const prisma = new PrismaClient();

class ProductRepository {
  async create(data: ProductData) {
    return prisma.product.create({ data });
  }

  async findById(id: string) {
    return prisma.product.findFirst({ where: { id: id } });
  }

  async getAllProducts() {
    return prisma.product.findMany({ orderBy: { name: "asc" } });
  }

  async getAllActiveProducts() {
    return prisma.product.findMany({ where: { isActive: true }, orderBy: { name: "asc" } });
  }

  async update(id: string, data: Partial<ProductData>) {
    return prisma.product.update({ where: { id }, data });
  }

  async hardDelete(id: string) {
    return prisma.product.delete({ where: { id } });
  }

  async softDelete(id: string) {
    return prisma.product.update({ where: { id }, data: { isActive: false }});
  }

  async restore(id: string) {
    return prisma.product.update({ where: { id }, data: { isActive: true }});
  }
}

export default new ProductRepository();