import express from 'express';
import dotenv from 'dotenv';
import('./db/connection.js');

import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import userRoutes from './routes/userRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';


const app = express();
app.use(express.json());
dotenv.config({ path: './config.env' });

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });

const port = process.env.PORT;

app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/cart', cartRoutes);
app.use('/user', userRoutes);
app.use('/review', reviewRoutes);

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}/product`);
});
