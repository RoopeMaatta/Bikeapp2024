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




// require('dotenv').config();
// const express = require('express');
// const router = express.Router(); // Create a new router
// const { Pool } = require('pg');
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL, // or separate credentials
// });

// router.get('/', async (req, res) => { // Changed from app.get to router.get
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT station_name FROM station');
//     res.json(result.rows);
//     client.release();
//   } catch (err) {
//     console.error(err);
//     res.send("Error " + err);
//   }
// });

// module.exports = router; // Export the router
