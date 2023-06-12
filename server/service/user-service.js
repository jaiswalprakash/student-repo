const userModel = require("../model/user-model");

// Function to register a new user
const registerUser = (payload) => {
	// Create a new user document using the userModel and save it to the database
	return new userModel({
		...payload
	}).save();
};

// Function to get all users
const getAllUsers = () => {
	// Find all user documents in the userModel collection
	return userModel.find({});
};

// Function to get user information by ID
const getInfo = (_id) => {
	// Find a user document with the specified _id in the userModel collection
	return userModel.findById({ _id });
};

// Function to delete user data
const deleteUserData = (user) => {
	// Find a user document with the specified _id and delete it from the userModel collection
	return userModel.findByIdAndDelete({ _id: user });
};

// Function to update user data
const updateUser = (_id, userData) => {
	// Find a user document with the specified _id and update its data with the provided userData
	// The $set operator is used to update specific fields in the document
	// The runValidators option ensures that the update operation follows the validation rules defined in the userModel schema
	// The new option returns the updated document after the update operation is performed
	return userModel.findByIdAndUpdate(
		{ _id },
		{
			$set: {
				...userData
			}
		},
		{ runValidators: true, new: true }
	);
};

module.exports = { registerUser, getInfo, getAllUsers, deleteUserData, updateUser }; // Export the service functions
