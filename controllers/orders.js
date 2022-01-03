import { Order } from '../model/orderSchema.js';

export const getOrders = async (req, res) => {
	try {
		const allOrders = await Order.find();

		res.status(200).json(allOrders);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getOrder = async (req, res) => {
	const { id } = req.params;

	try {
		const singleOrder = await Order.findById(id);

		res.status(200).json(singleOrder);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createOrder = async (req, res) => {
	const {
		// firstName,
		// lastName,
		// emailId,
		// phoneNumber,
		// productName,
		// country,
		// state,
		// city,
		// pincode,
		// quantity,
		// totalPrice,
		// productCategory,
		// productSubCategory,
		// isAddedToCart,
		// isClickedOnByNow,
		// isProductLiked,
		userId,productId
	} = req.body;

	const newOrder = new Order({
		// firstName,
		// lastName,
		// emailId,
		// phoneNumber,
		// productName,
		// country,
		// state,
		// city,
		// pincode,
		// quantity,
		// totalPrice,
		// productCategory,
		// productSubCategory,
		// isAddedToCart,
		// isClickedOnByNow,
		// isProductLiked,
		userId,productId
	});
	try {
		await newOrder.save();
		res.status(201).json(newOrder);
	} catch (error) {
		res.status(409).json({
			error:
				'All fields are mandetory please enter correct data fields are missing',
		});
	}
};

export const updateOrder = async (req, res) => {
	const { id } = req.params;
	const {
		firstName,
		lastName,
		emailId,
		phoneNumber,
		productName,
		country,
		state,
		city,
		pincode,
		quantity,
		totalPrice,
		productCategory,
		productSubCategory,
		isAddedToCart,
		isClickedOnByNow,
		isProductLiked,userId,productId,
	} = req.body;

	const updatedOrder = {
		firstName,
		lastName,
		emailId,
		phoneNumber,
		productName,
		country,
		state,
		city,
		pincode,
		quantity,
		totalPrice,
		productCategory,
		productSubCategory,
		isAddedToCart,
		isClickedOnByNow,
		isProductLiked,
		_id: id,userId,productId,
	};
	try {
		await Order.findByIdAndUpdate(id, updatedOrder, { new: true });

		res.json(updatedOrder);
	} catch (error) {
		res.status(404).json({ error: `No order available with id: ${id}` });
	}
};

export const cancelOrder = async (req, res) => {
	const { id } = req.params;
	try {
		await Order.findByIdAndRemove(id);

		res.json({ message: 'Post deleted successfully.' });
	} catch (error) {
		res.status(404).json({ error: `No order available with id: ${id}` });
	}
};
