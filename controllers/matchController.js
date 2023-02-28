const matchModel=require('./../models/matchModel')
const teamModel=require('./../models/teamModel')

exports.getLatestMatch=async(req,res,next)=>{
const date=new Date()
const queryField={
    date:`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
}

const teamIdList=[];

console.log(queryField)
const todayMatch=(await matchModel.getMatch(queryField))[0]
const team1Id=todayMatch.team1
const team2Id=todayMatch.team2

teamIdList.push(team1Id)
teamIdList.push(team2Id)

const teams=await teamModel.getTeams(teamIdList)

todayMatch.team1=teams.filter(
    (e)=> e.id===team1Id
)
todayMatch.team2=teams.filter(
    (e)=> e.id===team2Id
)


res.status(200).json({
    status:"success",
    result:todayMatch
})
}
