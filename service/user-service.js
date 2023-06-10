const { deleteUser } = require("../controllers/user-controller");
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
deleteUser = (user) => {
    return userModel.deleteOne({ _id: user });
}
updateUser = (user) => {
    return userModel.deleteOne({ _id: user });
}
module.exports = { registerUser, getInfo, listUser, deleteUser,updateUser };
