const express=require('express')

const app=express()
const authRouter=require('./authRoutes')
const userRoutes=require('./userRoutes')
const matchRoutes=require('./matchRoutes')

app.use('/auth',authRouter)
app.use('/user',userRoutes)
app.use('/match',matchRoutes)

module.exports=app