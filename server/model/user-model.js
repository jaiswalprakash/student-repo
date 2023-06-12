const mongoose = require("mongoose");
const schema = mongoose.Schema;
const validator = require("validator");

const UserSchema = new schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			validate(value) {
				if (!validator.isAlpha(value) && !validator.isLength(value, { min: 3 })) {
					throw new Error("Invalid name. Name must be a non-empty string.");
				}
				// const alphabetOnlyRegex = /^[A-Za-z]+$/;
				// if (!alphabetOnlyRegex.test(value) && value.length < 3) {
				// 	throw new Error("Invalid address. Address must be a non-empty string.");
				// }
			}
		},
		email: {
			type: String,
			trim: true,
			unique: true,
			required: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Invalid email!");
				}
				// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				// if (!emailRegex.test(value)) {
				// 	throw new Error("Invalid email format.");
				// }
			}
		},
		phone: {
			type: Number,
			trim: true,
			unique: true,
			required: true,
			validate(value) {
				if (!validator.isMobilePhone(value.toString(), "en-IN")) {
					throw new Error("Not an Indian phone number!");
				}
				// const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number format
				// if (!phoneRegex.test(value)) {
				// 	throw new Error("Invalid phone number format.");
				// }
			}
		},
		address: {
			type: String,
			trim: true,
			required: true,
			validate(value) {
				if (!validator.isLength(value, { min: 5, max: 100 })) {
					throw new Error("Invalid address. Address must be a non-empty string and contain more than 5 characters.");
				}
				// if (value.length < 5) {
				// 	throw new Error("Invalid address. Address must be a non-empty string.");
				// }
			}
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("users", UserSchema);
