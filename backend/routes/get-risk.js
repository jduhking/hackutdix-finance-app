const axios = require("axios");

async function GetStandardDeviation(ticker, time) {
  const res = await axios.get(
    `https://radioactive-ring-production.up.railway.app/history/?ticker=${ticker}&period=${time}`
  );

  return res.data["standard_deviation"].Close;
}

module.exports = function (router) {
  router.get("/get-risk", GetRisk);
};

async function GetRisk(req, res) {
  console.log(`Get data used to calculate risk for ${req.body.name} `);

  try {
    if (req.body == null) throw "No data found";

    // get standard deviation from python server

    stdDev = await GetStandardDeviation(req.query.ticker, req.query.time);

    console.log(stdDev);

    // Calculate the volatility

    const volatility = stdDev * Math.sqrt(365 / req.body.timePeriod);

    console.log(volatility);

    const message = "The volatility is : " + (volatility > 15 ? "HIGH" : "LOW");

    return res.status(200).json({ m: message, volatility: volatility });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ e: error });
  }
}
