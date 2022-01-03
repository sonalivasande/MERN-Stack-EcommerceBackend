import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	productName: {
		type: String,
		required: true,
	},
	productBrand: {
		type: String,
	},
	productPrice: {
		type: Number,
		required: true,
	},
	productDiscription: {
		type: String,
		required: true,
	},
	productImage: {
		type: String,
		required: true,
	},
	productQuantity: {
		type: Number,
		required: true,
	},
	productCategory: {
		type: String,
		required: true,
	},
	productCategorySubType: {
		type: String,
		required: true,
	},
	productRating:{
		type:Number
	}
});

export const Product = mongoose.model('PRODUCT', productSchema);
