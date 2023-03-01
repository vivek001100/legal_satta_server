const express = require("express");
const app = express();

const authRouter = require("./authRoutes");
const matchRoutes = require("./matchRoutes");
const leaderboardRoutes = require("./leaderboardRoutes");
const userRoutes = require("./userRoutes");

app.use("/match", matchRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/user", userRoutes);

app.use("/auth", authRouter);

module.exports = app;
