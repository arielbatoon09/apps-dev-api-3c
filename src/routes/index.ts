import Router from 'express';
import { ProductController } from '@/controllers/ProductController';

const router = Router();

// Routes Endpoint
router.get('/status', (req, res) => {
  res.send('Welcome to the API V1');
});

// Products
router.post("/product-create", ProductController.createProduct);

export default router;