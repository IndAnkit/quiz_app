// models/UserResponses.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config");

const UserResponses = sequelize.define(
  "UserResponses",
  {
    response_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "user_id",
      },
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "questions",
        key: "question_id",
      },
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "quizzes",
        key: "quiz_id",
      },
    },
    selected_choices: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    time_taken: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "quizdb_user_responses",
    timestamps: false,
  }
);

module.exports = UserResponses;
