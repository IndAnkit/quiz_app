// models/QuizUsers.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const QuizUsers = sequelize.define('QuizUsers', {
  quiz_user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'quizzes',
      key: 'quiz_id',
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'user_id',
    },
  },
}, {
  tableName: 'quizdb_quiz_users',
  timestamps: false,
});

module.exports = QuizUsers;
