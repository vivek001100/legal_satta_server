const express = require("express");
const app = express();

const authRouter = require("./authRoutes");
const matchRoutes = require("./matchRoutes");
const userChoiceRoutes = require("./usersChoiceRoutes");
const leaderboardRoutes = require("./leaderboardRoutes");

app.use("/match", matchRoutes);
app.use("/get", leaderboardRoutes);
app.use("/postchoice", userChoiceRoutes);
app.use("/auth", authRouter);

module.exports = app;
