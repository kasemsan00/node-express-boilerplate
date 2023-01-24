import { RequestHandler } from "express";
const prisma = require("../connection");

export const test: RequestHandler = (req, res, next) => {
  res.json({
    status: "OK",
  });
};

module.exports = {
  test,
};
