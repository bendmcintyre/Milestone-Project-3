require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Auth0
const { sessionMiddleware, authMiddleware, requiresAuth } = require('./auth');

app.use(sessionMiddleware);
app.use(authMiddleware);

// When controller is up and ready
const routes = require('./routes');

// Middleware for parsing JSON data
app.use(express.json());

// Mounting the routes
app.use('/', routes);
 
// Protected route for user's profile
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

