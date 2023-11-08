const express = require('express');
const router = express.Router();
const stationServices = require('../services/stationServices'); // Adjust the path to your services file
const { asyncHandler } = require('../utils/middleware'); // Adjust the path to the middleware.js file

// Route to get statistics for a single station by ID
router.get('/:stationId', asyncHandler(async (req, res) => {
  const { stationId } = req.params; // Extract stationId from request parameters
  const statistics = await stationServices.getStationStatistics(stationId);
  res.json(statistics);
}));

module.exports = router;
