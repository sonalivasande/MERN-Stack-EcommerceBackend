

import express from 'express';
import {
	addCartItems,
    getCartItems
} from '../controllers/cart.js';

const router = express.Router();

router.post('/', getCartItems);
router.post('/addCart', addCartItems);


export default router;
