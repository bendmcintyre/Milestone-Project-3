require('dotenv').config();

const { auth, requiresAuth } = require('express-openid-connect');
const session = require('express-session');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: "process.env.AUTH0_SECRET",
  baseURL: 'http://localhost:3000/',
  clientID: '5u3xdKEZtfIeedPhSf5S0YXPFm36ym9H',
  issuerBaseURL: 'https://dev-1klmdplz2dv77xqw.us.auth0.com/',
};

const sessionMiddleware = session({
  secret: "process.env.SESSION_SECRET",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  },
});

const authMiddleware = auth(config);

module.exports = { sessionMiddleware, authMiddleware, requiresAuth };