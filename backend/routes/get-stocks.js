const axios = require("axios");

const stockProfiles = {
  profiles: [
    {
      ticker: "AAPL",
      logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Fapple-logo%2F&psig=AOvVaw1kzgMFWCOTcmsf0cBvZNp6&ust=1668405158993000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCJCl3ti7qvsCFQAAAAAdAAAAABAE",
    },
    {
      ticker: "TLSA",
      logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2F1000logos.net%2Ftesla-logo%2F&psig=AOvVaw3eYyYpKS3HandfZWaGPOj3&ust=1668405195290000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKDihOq7qvsCFQAAAAAdAAAAABAE",
    },
    {
      ticker: "DIS",
      logo: "https://thumbs.dreamstime.com/b/disney-logo-disney-logo-vector-format-aviable-ai-246028606.jpg",
    },
  ],
};
function GetStockProfiles() {
  /*const res = await axios.get(
    "https://order-consist-lived-template.trycloudflare.com/profile/?ticker=TSLA&period=2y"
  );*/

  return stockProfiles;
}

module.exports = function (router) {
  router.get("/get-stocks", GetStocks);
};

async function GetStocks(req, res) {
  console.log("Retreiving profiles");

  try {
    // Get the stocks profile

    const stocks = GetStockProfiles();

    return res.status(200).json({ m: stocks });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ e: error });
  }
}
