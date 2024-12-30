// models/Question.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Question = sequelize.define('Question', {
  question_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  question_type: {
    type: DataTypes.ENUM('single', 'multiple'),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'quizdb_questions',
  timestamps: false,
});

module.exports = Question;
