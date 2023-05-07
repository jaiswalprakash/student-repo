const express = require('express');
const app = express();
const routes = require('./routes/users-routes');


app.use(express.json()); // Enable parsing of JSON request bodies
app.use(express.urlencoded({ extended: true })); // Enable parsing of URL-encoded request bodies
app.use('/', routes); // Mount the routes defined in routes.js at the root URL path



app.listen(3000, () => console.log('Server started on port 3000')); // Start the server listening on port 3000


