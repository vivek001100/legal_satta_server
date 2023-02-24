const express=require('express')

const app=express()
const authRouter=require('./authRoutes')
const usersChoiceRoutes=require('./usersChoiceRoutes')

app.use('/auth',authRouter)
app.use('/post',usersChoiceRoutes)
module.exports=app