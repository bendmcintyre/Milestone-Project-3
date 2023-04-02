const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

// Define your Pet model schema
const Pet = sequelize.define('Pet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });