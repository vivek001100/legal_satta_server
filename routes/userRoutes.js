const express = require('express');
const routes = express.Router();
const userController =require('../controllers/userController')


routes.post('/predict',userController.postUsersChoice)
routes.get('/prediction-history',userController.getUsersPredictions)
module.exports=routes