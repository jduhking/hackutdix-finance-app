const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const app = express();
app.use(bodyParser.json());
app.use(cors());

const routes = require("./routes")(express);
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
