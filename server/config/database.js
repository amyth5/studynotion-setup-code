const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
	mongoose
		.connect("mongodb+srv://divyanshumishra13280:yj4y4e5RkcuXuW5V@cluster0.e5ci6zj.mongodb.net/", {
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
