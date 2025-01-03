// models/QuizResults.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const QuizResults = sequelize.define('QuizResults', {
  result_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  quiz_user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'quizdb_quiz_users',
      key: 'quiz_user_id',
    },
  },
  total_score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  correct_answers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  incorrect_answers: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  completed_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'quizdb_results',
  timestamps: false,
});

module.exports = QuizResults;
