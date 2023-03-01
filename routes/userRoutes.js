const express = require('express');
const routes = express.Router();
const userController =require('../controllers/userController')


routes.post('/predict',userController.postUsersChoice)

module.exports=routes