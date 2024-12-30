// models/Quiz.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Quiz = sequelize.define('Quiz', {
  quiz_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: () => `quiz_${Math.random().toString(36).substring(2, 15)}`, // generate unique guest user ID

  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  status: {
    type: DataTypes.ENUM('active', 'completed', 'inactive'),
    defaultValue: 'active',
  },
}, {
  tableName: 'quizdb_quizzes',
  timestamps: false,
});

module.exports = Quiz;
