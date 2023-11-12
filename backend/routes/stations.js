const express = require('express');
const router = express.Router();
const { Station } = require('../models');
const { asyncHandler } = require('../utils/middleware'); // Adjust the path to the middleware.js file

// Route to get station names alpahbetically and ID's
router.get('/', asyncHandler(async (req, res) => {
  const stations = await Station.findAll({
    attributes: ['station_name', "id"],
    order: [['station_name', 'ASC']]
  });
  res.json(stations);
}));



module.exports = router;
