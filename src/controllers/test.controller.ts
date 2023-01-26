import { RequestHandler } from "express";
import prisma from "../connection";

export const test: RequestHandler = (req, res, next) => {
  res.json({
    status: "OK",
  });
};

export default {
  test,
};
