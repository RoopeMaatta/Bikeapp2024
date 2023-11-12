const { Station, Journey } = require('../models');

// Sequelize model tests for Station and Journey existing in database

describe('Database setup with Sequelize', () => {

  test('should find 4 stations', async () => {
    const stationCount = await Station.count();
    expect(stationCount).toBe(4);
  });

  test('should find 4 journeys', async () => {
    const journeyCount = await Journey.count();
    expect(journeyCount).toBe(4);
  });
});