const express = require("express");
const app = express();
const router = require("./Src/routes/api");

const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(bodyParser.json());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);


app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Route not found" });
});

module.exports = app;
