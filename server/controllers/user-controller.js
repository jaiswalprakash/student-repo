// ['firstname','lastname','email','phonenumber','profession'];
const userService = require("../service/user-service");
const validator = require("validator");

const requiredFields = ["name", "email", "phone", "address"];

const hasAllFields = (userInfo) => {
	return requiredFields.every((property) => {
		return userInfo.hasOwnProperty(property);
	});
};
// const hasAllFields = (userInfo) => requiredFields.every((property) => userInfo.hasOwnProperty(property));

// const hasAllFields = (userInfo) => {
// 	if (!userInfo.name || !userInfo.email || !userInfo.phone || !userInfo.address) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// };
// const hasAllFields = (userInfo) => userInfo.name && userInfo.email && userInfo.phone && userInfo.address;

const createUser = async (req, res) => {
	try {
		let userInfo = req.body;
		if (hasAllFields(userInfo)) {
			let response = await userService.registerUser(userInfo);
			res.status(200).send({
				message: "User created successfully!",
				result: response
			});
		} else {
			throw new Error("All fields are required.");
		}
	} catch (error) {
		console.log("Error occurred while creating user: ", error.message);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

const getUserInfo = async (req, res) => {
	try {
		let { userId } = req.params;
		if (!validator.isMongoId(userId)) {
			throw new Error("Invalid user id!");
		}
		let response = await userService.getInfo(userId);
		if (response) {
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

const listAllUsers = async (req, res) => {
	try {
		let allUsers = await userService.listAllUsers();
		res.status(200).send(allUsers);
	} catch (error) {
		console.log("Error occurred while listing all users: ", error);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

const updateUser = async (req, res) => {
	try {
		let { userId } = req.params;
		let userData = req.body;
		if (!validator.isMongoId(userId)) {
			throw new Error("Invalid user id!");
		}
		let response = await userService.updateUser(userId, userData);
		console.log(response);
		res.status(200).send({
			message: "Successfully updated user data!",
			result: response
		});
	} catch (error) {
		console.log("Error occurred while updating user details: ", error);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

const deleteUser = async (req, res) => {
	try {
		let { userId } = req.params;
		let response = await userService.deleteUserData(userId);
		if (response) {
			res.status(200).send({
				message: "Successfully deleted the user!",
				result: response
			});
		} else {
			res.status(404).send({
				message: "No user found by the given userId!"
			});
		}
	} catch (error) {
		console.log("Error occurred while deleting user: ", error);
		res.status(400).json({ message: "Error", error: error.message });
	}
};

module.exports = { createUser, getUserInfo, listAllUsers, deleteUser, updateUser };
