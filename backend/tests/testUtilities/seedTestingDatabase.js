const { Station, Journey } = require('../../models');
const { sequelize } = require('../../utils/config');

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