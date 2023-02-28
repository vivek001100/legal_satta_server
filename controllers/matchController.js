const matchModel=require('./../models/matchModel')

exports.getLatestMatch=async(req,res,next)=>{
const date=new Date()
const queryField={
    date:`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}
console.log(queryField)
const todayMatch=await matchModel.getMatch(queryField)

res.status(200).json({
    status:"success",
    result:todayMatch
})
}