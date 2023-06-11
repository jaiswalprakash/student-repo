// ['firstname','lastname','email','phonenumber','profession'];
const userService  = require("../service/user-service")
const createUser = async (req, res) => {
    try {
        let userInfo = validateUserObject(req.body)
        let response = await userService.registerUser(userInfo);
        if(response){
            res.status(200).send({
                status: 200,
                message: 'User Data Sava Successfully',
                result: response
            });
        }
    } catch (error) {
        res.status(400).send({
            status:400,
            error:error.message
        });
        console.error("Error Caught on createUser", error.message);
    }
};
const getUserInfo = async(req, res) => {
    try {
        let userId = (req.params.userId);
        let response = await userService.getInfo(userId);
        if(response){
            res.status(200).send({
                status: 200,
                message: 'User Data Fetched Successfully',
                results : response
            });
        }
    } catch (error) {
        res.status(400).send({
            status:400,
            error:error.message
        });
        console.error("Error Caught on getUserInfo", error.message);
    }
};

const listUser = (req, res) => {
    try {
        let userINfo = req.body;

    } catch (error) {
        console.error("Error Caught on createUser", createUser)
    }
};

const deleteUser = async (req, res) => {
    try {
        let userId = req.params.userId;
        await userService.deleteUserData(userId);
        res.status(200).send({
            status:200,
            result: "Successfully Deleted user!"
        });
        
    } catch (error) {
        console.error("Error Caught on deleteUser", createUser)
        res.status(400).send({
            status:400,
            error:error.message
        });
    }
};

const updateUser = async(req, res) => {
    try {
        let userData = req.body;
        await userService.updateUser(userData);
        res.status(200).send({
            status:200,
            result: "Successfully updated user data!"
        });

    } catch (error) {
        console.error("Error Caught on createUser", createUser)
    }
};

function validateUserObject(user) {
    // Check if all required fields are present
    if (!user.name || !user.email || !user.phone || !user.address) {
      throw new Error('All fields are required.');
    }
  
    // Check if the name is a non-empty string
    if (typeof user.name !== 'string' || user.name.trim() === '') {
      throw new Error('Invalid name. Name must be a non-empty string.');
    }
  
    // Check if the address is a non-empty string
    if (typeof user.address !== 'string' || user.address.trim() === '') {
      throw new Error('Invalid address. Address must be a non-empty string.');
    }
  
    // Check if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      throw new Error('Invalid email format.');
    }
  
    // Check if the phone number is valid
    const phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number format
    if (!phoneRegex.test(user.phone)) {
      throw new Error('Invalid phone number format.');
    }
  
    // If all checks pass, the object is considered valid
    return user;
  }
  


module.exports = { createUser, getUserInfo, listUser, deleteUser,updateUser };