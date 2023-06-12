const mongoose = require("mongoose");
const schema = mongoose.Schema;

const UserSchema = new schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
			validate(value) {
				const alphabetOnlyRegex = /^[A-Za-z]+$/;
				if (!alphabetOnlyRegex.test(value) && value.length < 3) {
					throw new Error("Invalid address. Address must be a non-empty string.");
				}
			}
		},
		email: {
			type: String,
			trim: true,
			unique: true,
			required: true,
			lowercase: true,
			validate(value) {
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				if (!emailRegex.test(value)) {
					throw new Error("Invalid email format.");
				}
			}
		},
		phone: {
			type: Number,
			trim: true,
			unique: true,
			required: true,
			validate(value) {
				const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number format
				if (!phoneRegex.test(value)) {
					throw new Error("Invalid phone number format.");
				}
			}
		},
		address: {
			type: String,
			trim: true,
			required: true,
			validate(value) {
				if (value.length < 5) {
					throw new Error("Invalid address. Address must be a non-empty string.");
				}
			}
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model("users", UserSchema);
