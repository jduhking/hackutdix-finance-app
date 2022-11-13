const axios = require("axios");

async function GetStandardDeviation() {
  const res = await axios.get(
    "https://order-consist-lived-template.trycloudflare.com/history/?ticker=TSLA&period=2y"
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

    stdDev = await GetStandardDeviation();

    console.log(stdDev);

    // Calculate the volatility

    const volatility = stdDev * Math.sqrt(365 / req.body.timePeriod);

    console.log(volatility);

    const message = "The volatility is : " + (volatility > 15 ? "HIGH" : "LOW");

    return res.status(200).json({ m: message });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ e: error });
  }
}
