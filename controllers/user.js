import { User } from '../model/userShema.js';

export const getUsers = async (req, res) => {
	try {
		const currentUser = await User.findOne({$or : [{"emailId":req.body.Username},{"phoneNumber":req.body.Username},{"username":req.body.Username}]});
		if(currentUser.password==req.body.Password)
		{
			res.status(200).json(currentUser);
		}else
		{
			res.status(200).json({"Authentication":"Failed"});
		}
		
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
export const getUser = async (req, res) => {
	const { id } = req.params;

	try {
		const oneUser = await User.findById(id);

		res.status(200).json(oneUser);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createUser = async (req, res) => {
	const {
		firstName,
		lastName,
		emailId,
		phoneNumber,
		gender,
		username,
		password,
		confirmPassword,
		age,
		country,
		state,
		city,
		pincode,
	} = req.body;

	const newUser = new User({
		firstName,
		lastName,
		emailId,
		phoneNumber,
		gender,
		username,
		password,
		confirmPassword,
		age,
		country,
		state,
		city,
		pincode,
	});
	try {
		if (password != confirmPassword) {
			return res
				.status(422)
				.json({ error: 'Password and confirmPassword does not match' });
		}
		const isUserExist = await User.findOne({ emailId: emailId });
		if (isUserExist) {
			return res.status(422).json({ error: 'Email alredy exist' });
		}
		const isUserNameExist = await User.findOne({ username: username });
		if (isUserNameExist) {
			return res.status(422).json({ error: 'Username alredy exist' });
		}
		const isPhoneNumberExist = await User.findOne({
			phoneNumber: phoneNumber,
		});
		if (isPhoneNumberExist) {
			return res.status(422).json({
				error:
					'Phone number alredy used try to signin with another mobile number',
			});
		}

		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(409).json({
			error:
				'All fields are mandetory please enter correct data fields are missing',
		});
	}
};

export const updateUser = async (req, res) => {
	const { id } = req.params;
	const {
		firstName,
		lastName,
		emailId,
		phoneNumber,
		gender,
		username,
		password,
		confirmPassword,
		age,
		country,
		state,
		city,
		pincode,
	} = req.body;

	const updatedUser = {
		firstName,
		lastName,
		emailId,
		phoneNumber,
		gender,
		username,
		password,
		confirmPassword,
		age,
		country,
		state,
		city,
		pincode,
		_id: id,
	};
	try {
		await User.findByIdAndUpdate(id, updatedUser, { new: true });

		res.json(updatedUser);
	} catch (error) {
		res.status(404).json({ error: `No user available with id: ${id}` });
	}
};

export const deleteUser = async (req, res) => {
	const { id } = req.params;
	try {
		await User.findByIdAndRemove(id);

		res.json({ message: 'User deleted successfully.' });
	} catch (error) {
		res.status(404).json({ error: `No user available with id: ${id}` });
	}
};
