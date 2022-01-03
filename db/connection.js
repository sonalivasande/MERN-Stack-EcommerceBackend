import mongoose from 'mongoose';
const connectionURL = process.env.CONNECTIONURL;

mongoose
	.connect(connectionURL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log(`Succsesfully Connected to DB`);
	})
	.catch((err) => {
		console.log(`Not connected ${err}`);
	});
