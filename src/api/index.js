/**
 * This module defines the basic routes for the server's APIs
 * [GET]
 * - / : send 200 status
 * - /weather :
 *
 * [POST]
 * -
 */
const { Router } = require('express');
const weatherRouter = require('./weather');

const router = Router();

router.get('/', (req, res, next) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});
router.use('/weather', weatherRouter);

module.exports = router;
