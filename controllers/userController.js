const userModel=require('./../models/userModel');

exports.checkUserNameAvailable=async(req,res,next)=>{
    const username=req.params.username;
    const isUserExist=await userModel.isUserExist(username);
    res.status(200).json({
        status:"success",
        isAvailable:!isUserExist
    });



}

