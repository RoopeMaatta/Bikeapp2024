const stationServices = require('../services/stationServices');


describe('Station statistics services - Happy Path', () => {
  test('finds all journeys to a station', async () => {
    const journeys = await stationServices.findAllJourneysToStation(4);
    expect(journeys).toBe(2);
  });

  test('finds all journeys from a station', async () => {
    const journeys = await stationServices.findAllJourneysFromStation(1);
    expect(journeys).toBe(3);
  });

  test('calculates average distance from a station', async () => {
    const avgDistance = await stationServices.findAverageDistanceFromStation(1);
    expect(avgDistance).toBe(3948);
  });

  test('calculates average duration from a station', async () => {
    const avgDuration = await stationServices.findAverageDurationFromStation(1);
    expect(avgDuration).toBe(1210);
  });

  test('gets combined station statistics', async () => {
    const stats = await stationServices.getStationStatistics(1);
    expect(stats).toStrictEqual({
      averageDistance: 3948,
      averageDuration: 1210,
      journeysFromStation: 3,
      journeysToStation: 0
    });
  });
});
