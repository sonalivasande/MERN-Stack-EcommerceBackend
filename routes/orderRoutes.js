import express from 'express';
import {
	getOrder,
	getOrders,
	updateOrder,
	cancelOrder,
	createOrder,
} from '../controllers/orders.js';

const router = express.Router();

router.get('/', getOrders);
router.get('/:id', getOrder);
router.patch('/updateOrder/:id', updateOrder);
router.delete('/cancelOrder/:id', cancelOrder);
router.post('/createOrder', createOrder);

export default router;
