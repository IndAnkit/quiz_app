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
      model: 'quizdb_quizzes',
      key: 'quiz_id',
    },
  },
  question_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'quizdb_questions',
      key: 'question_id',
    },
  },
}, {
  tableName: 'quizdb_quiz_questions',
  timestamps: false,
});

module.exports = QuizQuestions;
