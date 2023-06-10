// routes.js
const express = require('express');
const router = express.Router();


// Define routes and their corresponding controller functions
router.post('/create', createUser); // Route to create  bucket 

router.get('/get-info/:userId', getUserInfo); // Route to list all buckets

router.get('/get-list', listUser); // Route to list all buckets

router.delete('/delete/:userId', deleteUser); // Route to delete an object from a bucket

router.put('/update-user',updateUser); //  Route to upload multiple new object to a bucket

module.exports = router; // Export the router object for use in other modules


