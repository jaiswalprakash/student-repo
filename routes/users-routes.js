// routes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller')

// Define routes and their corresponding controller functions
router.post('/create', userController.createUser); // Route to create  bucket 

router.get('/get-info/:userId', userController.getUserInfo); // Route to list all buckets

router.get('/get-list', userController.listUser); // Route to list all buckets

router.delete('/delete/:userId', userController.deleteUser); // Route to delete an object from a bucket

router.put('/update-user',userController.updateUser); //  Route to upload multiple new object to a bucket

module.exports = router; // Export the router object for use in other modules


