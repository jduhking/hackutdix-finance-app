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
async function GetTicker() {
  const res = await axios.get();

  return stockProfiles;
}

async function GetIcon() {
  const res = await axios.get();

  return stockProfiles;
}

async function GetHistory(ticker) {
  const res = await axios.get(
    `${process.env.STOCK_HOST}/history?ticker=${ticker}`
  );

  data = Object.values(response.data);

  console.log(data);

  return 1;
}

module.exports = function (router) {
  router.get("/get-stocks", GetStocks);
};

async function GetStocks(req, res) {
  const { ticker } = req.query;
  if (!ticker) return res.status(400).json({ error: "No query provided" });

  try {
    // Get the stocks profile
    const results = await res.send(GetHistory(ticker));

    return res.json(results);

    return res.status(200).json({ m: stocks });
  } catch (error) {
    if (!res.headersSent) {
      return res.status(500).json({ error: err.message || "Server Error" });
    }

    console.log(error);
    return res.status(400).json({ e: error });
  }
}
