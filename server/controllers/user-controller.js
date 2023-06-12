// Import required modules and services
const userService = require("../service/user-service");
const validator = require("validator");

// Define an array of required fields
const requiredFields = ["name", "email", "phone", "address"];

// Function to check if all required fields are present in user info
const hasAllFields = (userInfo) => {
	return requiredFields.every((property) => {
		return userInfo.hasOwnProperty(property);
	});
};
// One line Function to check if all required fields are present in user info
// const hasAllFields = (userInfo) => requiredFields.every((property) => userInfo.hasOwnProperty(property));

// Function to check if all required fields are present in user info
// const hasAllFields = (userInfo) => {
// 	if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.address) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// };

// One line Function to check if all required fields are present in user info
// const hasAllFields = (userInfo) => userInfo.name && userInfo.email && userInfo.phone && userInfo.address;

// Controller function to create a new user
const createUser = async (req, res) => {
	try {
		let userInfo = req.body;

		// Check if the user info has all the required fields
		if (hasAllFields(userInfo)) {
			// Call the registerUser function from the userService to create the user
			let response = await userService.registerUser(userInfo);

			// Send success response
			res.status(200).send({
				message: "User created successfully!",
				result: response
			});
		} else {
			// Throw an error if any required field is missing
			throw new Error("All fields are required.");
		}
	} catch (error) {
		console.log("Error occurred while creating user: ", error.message);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

// Controller function to get user information
const getUserInfo = async (req, res) => {
	try {
		let { userId } = req.params;

		// Check if the provided userId is a valid MongoDB id
		if (!validator.isMongoId(userId)) {
			throw new Error("Invalid user id!");
		}

		// Call the getInfo function from the userService to fetch the user information
		let response = await userService.getInfo(userId);

		if (response) {
			// Send success response with the fetched user information
			res.status(200).send({
				message: "User Data Fetched Successfully",
				results: response
			});
		}
	} catch (error) {
		console.log("Error occurred while getting user info: ", error.message);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

// Controller function to list all users
const listAllUsers = async (req, res) => {
	try {
		// Call the listAllUsers function from the userService to get all users
		let allUsers = await userService.listAllUsers();

		// Send success response with the list of all users
		res.status(200).send(allUsers);
	} catch (error) {
		console.log("Error occurred while listing all users: ", error);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

// Controller function to update user information
const updateUser = async (req, res) => {
	try {
		let { userId } = req.params;
		let userData = req.body;

		// Check if the provided userId is a valid MongoDB id
		if (!validator.isMongoId(userId)) {
			throw new Error("Invalid user id!");
		}

		// Call the updateUser function from the userService to update the user information
		let response = await userService.updateUser(userId, userData);

		// Send success response with the updated user information
		res.status(200).send({
			message: "Successfully updated user data!",
			result: response
		});
	} catch (error) {
		console.log("Error occurred while updating user details: ", error);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

// Controller function to delete a user
const deleteUser = async (req, res) => {
	try {
		let { userId } = req.params;

		// Call the deleteUserData function from the userService to delete the user
		let response = await userService.deleteUserData(userId);
		if (response) {
			// Send success response if the user was deleted successfully
			res.status(200).send({
				message: "Successfully deleted the user!",
				result: response
			});
		} else {
			// Send error response if no user was found with the given userId
			res.status(404).send({
				message: "No user found by the given userId!"
			});
		}
	} catch (error) {
		console.log("Error occurred while deleting user: ", error);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

module.exports = { createUser, getUserInfo, listAllUsers, deleteUser, updateUser }; // Export the controller functions
