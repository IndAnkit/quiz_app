// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

// Define the User model
const User = sequelize.define('User', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Auto-increment for user_id
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Ensuring the username is unique
    defaultValue: () => `guest_${Math.random().toString(36).substring(2, 15)}`, // generate unique guest user ID
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW, // Default to the current time
  },
}, {
  tableName: 'quizdb_users', // The table name in the database
  timestamps: false, // Disable automatic timestamp columns (createdAt/updatedAt)
});

module.exports = User;
