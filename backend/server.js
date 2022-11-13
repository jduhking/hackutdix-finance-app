const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/.env" });

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.listen(3000);
