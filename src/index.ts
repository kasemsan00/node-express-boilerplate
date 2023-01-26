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

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { loggers } from "winston";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

startStandaloneServer(server, { listen: { port: 4000 } }).then(({ url }) => {
  logger.info(`Server ready at: ${url}`);
});
