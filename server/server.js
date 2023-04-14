const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//When controller is up and ready

const routes = require('./routes')

// Middleware for parsing JSON data
app.use(express.json());

// Mounting the routes
app.use('/', routes);

// Starting the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
