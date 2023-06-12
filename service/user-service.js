const userModel = require("../model/user-model");

// Function to register a user
registerUser = (payload) => {
    return new userModel({
        ...payload,
    }).save(); // Save the user model with the provided payload
}

// Function to list users
listUser = () => {
    return userModel.find({ orgId }); // Find and return all users with the specified orgId
}

// Function to get user information
getInfo = (_id) => {
    return userModel.findOne({ _id }); // Find and return a user with the specified _id
}

// Function to delete user data
deleteUserData = (user) => {
    return userModel.deleteOne({ _id: user }); // Delete a user with the specified _id
}

// Function to update user data
updateUser = (user) => {
    let _id = user._id; // Get the _id from the user object
    delete user._id; // Remove the _id property from the user object
    return userModel.findByIdAndUpdate({ _id }, {$set: {
        ...user
    }}); // Update the user with the specified _id using the new user data
}

module.exports = { registerUser, getInfo, listUser, deleteUserData, updateUser };
