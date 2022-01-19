import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    userId: {
		type: String,
		required: true,
	},
    firstName:{
        type: String,
		required: true,

    },
    lastName:{
        type: String,
		required: true,

    },
    emailId:{
        type: String,
		required: true,

    },
    phoneNumber:{
        type: String,
		required: true,

    },
	productName: {
		type: String,
		required: true,
	},
	isProductLiked: {
		type: Boolean,
	},
	productRating: {
		type: Number,
		required: true,
		default: 0,
		max: 5,
	},
	productReviewComment: {
		type: String,
		required: true,
	},
});

export const Review = mongoose.model('REVIEW', reviewSchema);
