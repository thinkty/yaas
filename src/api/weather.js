/**
 * This module is for the weather project
 *
 * @see https://github.com/thinkty/yaas
 */
const { Router } = require('express');
const axios = require('axios').default;
const logger = require('../utils/logger');

const router = Router();

router.get('/', (req, res, next) => {
  const { query } = req;

  axios.get('https://api.openweathermap.org/data/2.5/onecall', {
    params: {
      ...query,
      appid: process.env.OPEN_WEATHER_KEY,
      exclude: 'minutely',
    },
  })
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      logger.error(error);
      res.sendStatus(500);
    });
});

module.exports = router;
