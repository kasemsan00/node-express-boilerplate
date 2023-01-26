import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors = require("cors");
import logger from "./config/logger";
import indexRouter from "./routes/index";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/", indexRouter);

app.listen(process.env.PORT, () => {
  logger.info("Server is running on port " + process.env.PORT);
});
