import express from 'express';
import {
	getProducts,
	getProduct,
	createProduct,
	deleteProduct,
	getSortProducts,
	updateProduct,
} from '../controllers/products.js';

const router = express.Router();

router.post('/', getProducts);
router.post('/sortProduct', getSortProducts);
router.get('/:id', getProduct);
router.patch('/updateProduct/:id', updateProduct);
router.delete('/deleteProduct/:id', deleteProduct);
router.post('/createProduct', createProduct);

export default router;
