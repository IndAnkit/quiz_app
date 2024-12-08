// models/Choice.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Choice = sequelize.define('Choice', {
  choice_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  question_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'questions',
      key: 'question_id',
    },
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  is_correct: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'choices',
  timestamps: false,
});

module.exports = Choice;
