const Joi = require('joi');


const createUser = (req, res) => {
    try {
        let userInfo = req.body; 

        

    } catch (error) {
        console.error("Error Caught on createUser", createUser)
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


module.exports = { createUser, getUserInfo, listUser, deleteUser };