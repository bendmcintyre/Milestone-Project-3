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

  // Define your User model schema.. but not sure if admin is supposed to work likle this
const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

// Not sure if we have to define relationships here or if this would be considered right? 
Pet.belongsTo(User);
User.hasMany(Pet);

// Sync your schema with your database
sequelize.sync();

module.exports = { Pet, User };