const userModel = require("../model/user-model");

registerUser = (payload) => {
    return new userModel({
        ...payload,
    }).save();
}
listUser = () => {
    return userModel.find({ orgId });
}
getInfo = (_id) => {
    return userModel.findOne({ _id });
}
deleteUserData = (user) => {
    return userModel.deleteOne({ _id: user });
}
updateUser = (user) => {
    let _id = user._id;
    delete user._id;
    return userModel.findByIdAndUpdate({ _id }, {$set: {
        ...user
    }});
}

module.exports = { registerUser, getInfo, listUser, deleteUserData,updateUser };
