// config/config.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

// Create Sequelize instance with database credentials
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres', 
    port: process.env.DB_PORT,
  }
);

module.exports = sequelize;