const express = require('express');
const router = express.Router();
const stationServices = require('../services/stationServices');
const { asyncHandler, validateId } = require('../utils/middleware');

// Route to get statistics for a single station by ID
router.get('/:stationId', validateId, asyncHandler(async (req, res) => {
  const { stationId } = req.params; // Extract stationId from request parameters
  const statistics = await stationServices.getStationStatistics(stationId);
  res.json(statistics);
}));

module.exports = router;
