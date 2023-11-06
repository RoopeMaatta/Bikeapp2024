const { Station, Journey } = require('../models');

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



// describe('Database setup', () => {

//   test('should find 4 stations', async () => {
//     const res = await client.query('SELECT COUNT(*) FROM stations');
//     const stationCount = parseInt(res.rows[0].count, 10);
//     console.log(`There are ${stationCount} stations in the database.`);
//     expect(stationCount).toBe(4);
//   });

//   test('should find 4 journeys', async () => {
//     const res = await client.query('SELECT COUNT(*) FROM journeys');
//     const journeyCount = parseInt(res.rows[0].count, 10);
//     console.log(`There are ${journeyCount} journeys in the database.`);
//     expect(journeyCount).toBe(4);
//   });
// });

