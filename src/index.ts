import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors = require("cors");
import logger from "./config/logger";
import indexRouter from "./routes/index";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import http from "http";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
const httpServer = http.createServer(app);
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async () => {
  await server.start();
  app.use("/", indexRouter);
  app.use(
    "/graphql",
    cors(),
    bodyParser.json({ limit: "150mb" }),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );
  httpServer.listen({ port: 4000 }, () => {
    logger.info(`🚀 Server ready at http://localhost:4000/`);
  });
})();
