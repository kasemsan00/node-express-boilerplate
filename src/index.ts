require("dotenv").config();
import express from "express";
import morgan from "morgan";
const cors = require("cors");
const app = express();

const indexRouter = require("./routes/index");
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
app.use("/", indexRouter);

app.listen(5500, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);
