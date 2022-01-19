import express from 'express';
import {
	getReview,
	updateReview,
	createReview,
	deleteReview,
	getReviews,
} from '../controllers/review.js';

const router = express.Router();

router.get('/', getReviews);
router.get('/:id', getReview);
router.patch('/updateReview/:id', updateReview);
router.delete('/deleteReview/:id', deleteReview);
router.post('/createReview', createReview);

export default router;
