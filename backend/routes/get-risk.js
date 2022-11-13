const axios = require("axios");

async function GetData(field) {
  axios
    .get(
      "https://order-consist-lived-template.trycloudflare.com/history/?ticker=AAPL&period=1y"
    )
    .then(function (response) {
      for (const [key, value] of Object.entries(response)) {
        console.log(key, value);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

module.exports = function (router) {
  router.get("/get-risk", GetRisk);
};

async function GetRisk(req, res) {
  console.log(`Get data used to calculate risk for ${req.body.name} `);

  try {
    if (req.body == null) throw "No data found";

    GetData();

    // get standard deviation from python server

    /*const stdDev = GetData;



    const volatility = stdDev * Math.sqrt(req.body.time);
    */
    const volatility = 10;

    const message =
      "The volatility is : " + (volatility > 0.15 ? "HIGH" : "LOW");

    return res.status(200).json({ m: volatility });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ e: error });
  }
}
