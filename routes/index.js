const express=require('express')

const app=express()
const authRouter=require('./authRoutes')

app.use('/auth',authRouter)
module.exports=app