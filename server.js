const express = require('express');
const app = express();
const Useroutes = require('./routes/users-routes');
app.use(express.json()); // Enable parsing of JSON request bodies
app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded request bodies
app.use('/user/', Useroutes); // Mount the routes defined in routes.js at the root URL path
app.use(require("body-parser").json());


const path = require('path'); // for showing the html 

const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/studentDb')
.then(() => console.log('Connected!'))
.catch(err => console.log("Error while connecting to MongoDB: ", err));
// const uri = 'mongodb://localhost:27017/studentDb'; // replace with your MongoDB connection string
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// client.connect()
// .then(() => console.log("Connected to MongoDB!"))
// .catch(err => console.log("Error while connecting to MongoDB: ", err));

app.use(express.static(path.join(__dirname, 'views')));

app.listen(3000, () => console.log('Server started on port 3000')); // Start the server listening on port 3000


