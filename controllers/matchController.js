const matchModel = require("./../models/matchModel");

exports.getLatestMatch = async (req, res, next) => {
  const date = new Date();
  const month = date.getMonth() + 1;
  let queryField;
  if (month < 10) {
    queryField = {
      date: `${date.getDate()}-0${month}-${date.getFullYear()}`,
    };
  } else {
    queryField = {
      date: `${date.getDate()}-${month}-${date.getFullYear()}`,
    };
  }
  console.log(queryField);
  const todayMatch = await matchModel.getMatch(queryField);

  res.status(200).json({
    status: "success",
    result: todayMatch,
  });
};
