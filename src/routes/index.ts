import express from "express";
const router = express.Router();

import testController = require("../controllers/test.controller");

router.get("/", (req, res) => {
  res.send({
    Message: "API Backend is working",
  });
});

router.get("/test", testController.test);

export default router;
