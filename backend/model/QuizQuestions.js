// models/QuizQuestions.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const QuizQuestions = sequelize.define('QuizQuestions', {
  quiz_questions_id: {
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
  question_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'questions',
      key: 'question_id',
    },
  },
}, {
  tableName: 'quiz_questions',
  timestamps: false,
});

module.exports = QuizQuestions;
