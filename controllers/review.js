import { Review } from '../model/reviewSchema.js';

export const getReviews = async (req, res) => {
	try {
		const allReviews = await Review.find();

		res.status(200).json(allReviews);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const getReview = async (req, res) => {
	const { id } = req.params;

	try {
		const oneReview = await Review.findById(id);

		res.status(200).json(oneReview);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createReview = async (req, res) => {
	const {firstName,lastName,emailId,userId,phoneNumber, productName, isProductLiked, productRating, productReviewComment } =
		req.body;

	const newReview = new Review({
		firstName,
        lastName,
        emailId,
        userId,
        phoneNumber,
        productName,
		// isProductLiked,
		productRating,
		productReviewComment,
	});
	try {
		await newReview.save();
		res.status(201).json(newReview);
	} catch (error) {
		res.status(409).json({
			error:
				'All fields are mandetory please enter correct data fields are missing',
		});
	}
};

export const updateReview = async (req, res) => {
	const { id } = req.params;
	const { firstName,lastName,emailId,userId,phoneNumber,productName, isProductLiked, productRating, productReviewComment } =
		req.body;

	const updatedReview = {
        firstName,
        lastName,
        emailId,
        userId,
        phoneNumber,
		productName,
		// isProductLiked,
		productRating,
		productReviewComment,
		_id: id,
	};
	try {
		await Review.findByIdAndUpdate(id, updatedReview, { new: true });

		res.json(updatedReview);
	} catch (error) {
		res.status(404).json({ error: `No product available with id: ${id}` });
	}
};

export const deleteReview = async (req, res) => {
	const { id } = req.params;
	try {
		await Review.findByIdAndRemove(id);

		res.json({ message: 'Post deleted successfully.' });
	} catch (error) {
		res.status(404).json({ error: `No product available with id: ${id}` });
	}
};
