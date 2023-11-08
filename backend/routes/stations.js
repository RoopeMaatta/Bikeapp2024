require('dotenv').config();
const express = require('express');
const router = express.Router(); // Create a new router
// Import the database instance and models
const { Station } = require('../models'); // Adjust the path according to your project structure

router.get('/', async (req, res) => {
  try {
    // Use Sequelize's model methods to get the stations
    const stations = await Station.findAll({
      attributes: ['station_name'] // Only fetch the station_name field
    });
    res.json(stations); // This will automatically convert the array of instances to a plain JSON object array
  } catch (err) {
    console.error(err);
    res.send("Error " + err);
  }
});

module.exports = router;