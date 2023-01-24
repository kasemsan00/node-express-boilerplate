import { RequestHandler } from 'express';

export const test:RequestHandler = (req, res, next) => {
  res.json({
    status : "OK"
  })
};

module.exports = {
  test
}
