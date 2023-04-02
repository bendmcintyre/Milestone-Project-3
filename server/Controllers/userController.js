const bcrypt = require('bcrypt');
const User = require('../models/user');

const userController = {};

// Function to handle user registration
userController.registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username is already taken
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      username,
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to handle user login
userController.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a token and send it as a response
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Function to handle user logout
userController.logoutUser = (req, res) => {
  // Destroy the token and send a response
  req.logout();
  res.status(200).json({ message: 'User logged out successfully' });
};

module.exports = userController;
