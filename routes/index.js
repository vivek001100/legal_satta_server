const express = require("express");
const app = express();

const authRouter = require("./authRoutes");
// const userRoutes=require('./userRoutes')
const matchRoutes = require("./matchRoutes");

const userChoiceRoutes = require("./usersChoiceRoutes");

const leaderboardRoutes = require("./leaderboardRoutes");

app.use("/auth", authRouter);
// app.use('/user',userRoutes)
app.use("/match", matchRoutes);
app.use("/get", leaderboardRoutes);
app.use("/postchoice", userChoiceRoutes);
module.exports = app;
