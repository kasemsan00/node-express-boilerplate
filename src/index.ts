import { Prisma, PrismaClient } from "@prisma/client";
import express from "express";
import morgan from "morgan";

const prisma = new PrismaClient();
const app = express();

const indexRouter = require("./routes/index");
app.use(morgan("dev"));
app.use(express.json());
app.use("/", indexRouter);

const server = app.listen(5500, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
);
