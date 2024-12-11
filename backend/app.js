const express = require("express");
const path = require("path");
const userRoutes = require("./routes/userRoute");
const quizRoute = require("./routes/quizRoute");
const questionRoute = require("./routes/questionRoute");
const scoreRoute = require("./routes/scoreRoute");
const sequelize = require("./config/index");
const dotenv = require("dotenv");
const cors = require("cors");
const AppError = require("./utils/appError");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database synchronized");
  })
  .catch((err) => {
    console.error("Error syncing database:", err);
  });

app.use(express.static("public"));

app.use(express.static(path.join(__dirname, "..", "front_end", "dist")));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/quiz", quizRoute);
app.use("/api/v1/question", questionRoute);
app.use("/api/v1/score", scoreRoute);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "front_end","index.html"));
});

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});
module.exports = app;
