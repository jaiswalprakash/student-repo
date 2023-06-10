// ['firstname','lastname','email','phonenumber','profession'];
const userService  = require("../model/user-model")
const createUser = async (req, res) => {
    try {
        let userInfo = req.body; 
        userInfo = validateUserObject(userInfo)
        let response = await userService.registerUser(userInfo);
        if(response){
            res.status(200).send({
                status: 200,
                message: 'User Data Sava Successfully',
            });
        }

    } catch (error) {
        res.status(500).send({error});
        console.error("Error Caught on createUser", error);
    }
};
const getUserInfo = (req, res) => {
    try {
        let userINfo = req.body;

    } catch (error) {
        console.error("Error Caught on createUser", createUser)
    }
};

const listUser = (req, res) => {
    try {
        let userINfo = req.body;

    } catch (error) {
        console.error("Error Caught on createUser", createUser)
    }
};

const deleteUser = (req, res) => {
    try {
        let userINfo = req.body;

    } catch (error) {
        console.error("Error Caught on createUser", createUser)
    }
};

const updateUser = (req, res) => {
    try {
        let userINfo = req.body;

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