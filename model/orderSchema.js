import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
	// firstName: {
	// 	type: String,
	// 	required: true,
	// },
	// lastName: {
	// 	type: String,
	// 	required: true,
	// },
	// emailId: {
	// 	type: String,
	// 	required: true,
	// },
	// phoneNumber: {
	// 	type: Number,
	// 	required: true,
	// },
	// productName: {
	// 	type: String,
	// 	required: true,
	// },
	// country: {
	// 	type: String,
	// 	required: true,
	// },
	// state: {
	// 	type: String,
	// 	required: true,
	// },
	// city: {
	// 	type: String,
	// 	required: true,
	// },
	// pincode: {
	// 	type: Number,
	// 	required: true,
	// },
	// quantity: {
	// 	type: Number,
	// 	required: true,
	// },
	// totalPrice: {
	// 	type: Number,
	// 	required: true,
	// },
	// productCategory: {
	// 	type: String,
	// 	required: true,
	// },
	// productSubCategory: {
	// 	type: String,
	// 	required: true,
	// },
	// isAddedToCart: {
	// 	type: Boolean,
	// },
	// isClickedOnByNow: {
	// 	type: Boolean,
	// },
	// isProductLiked: {
	// 	type: Boolean,
	// },
	userId:{
		type:String,
	},
	productId:{
		type:Array	
	}
});

export const Order = mongoose.model('ORDER', orderSchema);
