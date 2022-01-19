
import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
	
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
    items:{
        type:Object,
        required:true
    }
	
});

export const cart = mongoose.model('CART', cartSchema);

