require("dotenv").config();

const express = require("express");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const router = require("./routes/index.js");

const app = express();

app.use('/api/v1', router);
app.listen(3000)



