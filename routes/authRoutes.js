const express=require('express')
const router=express.Router()

router.post('/signup',(req,res,nxt)=>{
    console.log('auth_route');
    res.send('h')
})
module.exports=router;