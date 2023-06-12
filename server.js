const express = require('express');
const app = express();

// Importing the user routes from './routes/users-routes'
const Useroutes = require('./routes/users-routes');

// Enable parsing of JSON request bodies
app.use(express.json());

// Enable parsing of URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Mount the routes defined in users-routes.js at the '/user/' URL path
app.use('/user/', Useroutes);

// Enable parsing of JSON request bodies using body-parser
app.use(require("body-parser").json());

// Importing the path module for serving static files
const path = require('path');

// Importing the mongoose library for MongoDB connection
const mongoose = require('mongoose');

// Connecting to the 'studentDb' MongoDB database on the local machine
mongoose.connect('mongodb://localhost:27017/studentDb')
  .then(() => console.log('Connected!'))
  .catch(err => console.log("Error while connecting to MongoDB: ", err));

// Serving static files from the 'views' directory
app.use(express.static(path.join(__dirname, 'views')));

// Starting the server listening on port 3000
app.listen(3000, () => console.log('Server started on port 3000'));
