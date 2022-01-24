import { Product } from '../model/productSchema.js';

export const getProducts = async (req, res) => {
	try {
		
		const allProducts = await Product.find(req.body);

		res.status(200).json(allProducts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const getSortProducts = async (req, res) => {
	try {
		const allProducts = await Product.find(req.body.category).sort({"productPrice":req.body.sort});

		res.status(200).json(allProducts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const getProduct = async (req, res) => {
	const { id } = req.params;

	try {
		const oneProduct = await Product.findById(id);

		res.status(200).json(oneProduct);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createProduct = async (req, res) => {
	const {
		productName,
		productBrand,
		productPrice,
		productDiscription,
		productImage,
		productQuantity,
		productCategory,
		productCategorySubType,
		productRating,
	} = req.body;

	const newProduct = new Product({
		productName,
		productBrand,
		productPrice,
		productDiscription,
		productImage,
		productQuantity,
		productCategory,
		productCategorySubType,
		productRating,
	});
	try {
		await newProduct.save();
		res.status(201).json(newProduct);
	} catch (error) {
		res.status(409).json({
			error:
				'All fields are mandetory please enter correct data fields are missing',
		});
	}
};

export const updateProduct = async (req, res) => {
	const { id } = req.params;
	const {
		productName,
		productBrand,
		productPrice,
		productDiscription,
		productImage,
		productQuantity,
		productCategory,
		productCategorySubType,
		productRating,
	} = req.body;

	const updatedProduct = {
		productName,
		productBrand,
		productPrice,
		productDiscription,
		productImage,
		productQuantity,
		productCategory,
		productCategorySubType,
		productRating,
		_id: id,
	};
	try {
		await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

		res.json(updatedProduct);
	} catch (error) {
		res.status(404).json({ error: `No product available with id: ${id}` });
	}
};

export const deleteProduct = async (req, res) => {
	const { id } = req.params;
	try {
		await Product.findByIdAndRemove(id);

		res.json({ message: 'Post deleted successfully.' });
	} catch (error) {
		res.status(404).json({ error: `No product available with id: ${id}` });
	}
};
