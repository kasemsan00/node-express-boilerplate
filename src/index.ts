require("dotenv").config();
import express from "express";
import morgan from "morgan";
const cors = require("cors");
const app = express();
const logger = require("./config/logger");

const indexRouter = require("./routes/index");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
  logger.info("Server is running on port " + process.env.PORT);
});
