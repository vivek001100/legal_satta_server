const matchModel = require("./../models/matchModel");

exports.getTodayMatchDetail = async (req, res, next) => {
  const d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  const todayDate = {
    date: `${day}-${month + 1}-${year}`,
  };
  console.log(todayDate);
  const todayMatch = await matchModel.selectTodayMatch(todayDate);

  res.status(200).json({
    status: "success",
    match: todayMatch,
  });
};
