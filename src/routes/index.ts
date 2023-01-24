import express from 'express'
const router = express.Router();

const testController = require('../controllers/test.controller');

router.get('/', (req, res) => {
  res.send({
    "Message" : "API Backend is working"
  })
});

router.get("/test", testController.test);

module.exports = router;
