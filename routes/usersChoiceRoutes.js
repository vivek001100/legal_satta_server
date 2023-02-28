const express = require('express');
const routes = express.Router();
const {postUsersChoice} =require('../controllers/userChoiceController')


routes.post('/post',postUsersChoice)

module.exports=routes