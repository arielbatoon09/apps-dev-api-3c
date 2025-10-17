import { Request, Response } from 'express';
import { createProductService } from '@/services/products';

export const ProductController = {
  // Create Product
  async createProduct(req: Request, res: Response) {
    const result = await createProductService(req.body);

    // Response
    return res.status(201).json({
      status: 'success',
      message: 'Product created successfully',
      data: result
    });
  }
}