import express from 'express';
import {
	getUser,
	getUsers,
	updateUser,
	deleteUser,
	createUser,
} from '../controllers/user.js';

const router = express.Router();

router.post('/', getUsers);
router.get('/:id', getUser);
router.patch('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);
router.post('/createUser', createUser);

export default router;
