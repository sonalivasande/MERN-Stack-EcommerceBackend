
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
	
	userId: {
		type: String,
		required: true,
	},
    items:{
        type:Object,
        required:true
    }
	
});

export const cart = mongoose.model('CART', cartSchema);

