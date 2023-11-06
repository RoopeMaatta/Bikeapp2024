const { Station, Journey } = require('../../models'); 
const { sequelize } = require('../../config/database');

const stationsData = require('./stationsTesting.json');
const journeysData = require('./journeysTesting.json');

const seedDatabase = async () => {
  try {
    // Using Sequelize to handle transactions
    await sequelize.transaction(async (transaction) => {
      // Truncate the tables before seeding
      await Station.destroy({ where: {}, truncate: true, cascade: true, restartIdentity: true, transaction });
      await Journey.destroy({ where: {}, truncate: true, cascade: true, restartIdentity: true, transaction });

      // Seed stations
      for (const station of stationsData) {
        await Station.create(station, { transaction });
      }

      // Seed journeys
      for (const journey of journeysData) {
        await Journey.create(journey, { transaction });
      }
    });
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
};

module.exports = seedDatabase;




// const stations = require('./stationsTesting.json');
// const journeys = require('./journeysTesting.json');


// const seedDatabase = async (existingPool) => {
//   const client = await existingPool.connect();

//   try {
//     await client.query('BEGIN');

//     // Truncate the tables before seeding
//     await client.query('TRUNCATE TABLE stations, journeys RESTART IDENTITY CASCADE');

//     // Seed stations
//     for (const station of stations) {
//       await client.query('INSERT INTO stations (id, station_name, station_address, coordinate_x, coordinate_y) VALUES ($1, $2, $3, $4, $5)',
//         [station.id, station.station_name, station.station_address, station.coordinate_x, station.coordinate_y]);
//     }

//     // Seed journeys
//     for (const journey of journeys) {
//       await client.query('INSERT INTO journeys (id, departure_date_time, return_date_time, departure_station_id, return_station_id, distance, duration) VALUES ($1, $2, $3, $4, $5, $6, $7)',
//         [journey.id, journey.departure_date_time, journey.return_date_time, journey.departure_station_id, journey.return_station_id, journey.distance, journey.duration]);
//     }

//     await client.query('COMMIT');
//   } catch (error) {
//     await client.query('ROLLBACK');
//     throw error;
//   } finally {
//     client.release();
//   }
// };


// module.exports = seedDatabase;
