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
				if (!validator.isAlpha(value) && !validator.isLength(value, { min: 1 })) {
					throw new Error("Invalid name. Name must be a non-empty string.");
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
				if (!validator.isEmail(value)) {
					throw new Error("Invalid email!");
				}
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
			}
		},
		address: {
			type: String,
			trim: true,
			required: true,
			validate(value) {
				if (!validator.isAlphanumeric(value) && !validator.isLength(value, { min: 5, max: 100 })) {
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
