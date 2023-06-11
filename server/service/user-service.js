const userModel = require("../model/user-model");

registerUser = (payload) => {
	return new userModel({
		...payload
	}).save();
};

getAllUsers = () => {
	return userModel.find({});
};

getInfo = (_id) => {
	return userModel.findById({ _id });
};

deleteUserData = (user) => {
	return userModel.findByIdAndDelete({ _id: user });
};

updateUser = (_id, userData) => {
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

module.exports = { registerUser, getInfo, getAllUsers, deleteUserData, updateUser };
