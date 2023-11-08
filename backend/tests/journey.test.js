const { Journey } = require('../models');

// functions //

const { Sequelize } = require('sequelize');


async function findAllJourneysToStation(stationId) {
  const journeys = await Journey.findAll({ where: { return_station_id: stationId } });
  return journeys.length;
}

async function findAllJourneysFromStation(stationId) {
  const journeys = await Journey.findAll({ where: { departure_station_id: stationId } });
  return journeys.length
}

async function findAverageDistanceFromStation(stationId) {
  const result = await Journey.findAll({
    where: { departure_station_id: stationId },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('distance')), 'averageDistance']
    ],
    raw: true,
  });

  // Assuming result[0].averageDistance is a string representing a float number
  return Math.round(parseFloat(result[0].averageDistance));
}


async function findAverageDurationFromStation(stationId) {
  const result = await Journey.findAll({
    where: { departure_station_id: stationId },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('duration')), 'averageDuration']
    ],
    raw: true,
  });

  // Assuming result[0].averageDuration is a string representing a float number
  return Math.round(parseFloat(result[0].averageDuration));
}


// combining function //

async function getStationStatistics(stationId) {
  const journeysToStation = await findAllJourneysToStation(stationId);
  const journeysFromStation = await findAllJourneysFromStation(stationId);
  const averageDistance = await findAverageDistanceFromStation(stationId);
  const averageDuration = await findAverageDurationFromStation(stationId);

  return {
    journeysToStation,
    journeysFromStation,
    averageDistance,
    averageDuration,
  };
}


// tests //

describe('Station statistics', () => {
  test('finds all journeys to a station', async () => {
    const journeys = await findAllJourneysToStation(4);
    expect(journeys).toBe(2);
  });

  test('finds all journeys from a station', async () => {
    const journeys = await findAllJourneysFromStation(1);
    expect(journeys).toBe(3);
  });

  test('calculates average distance from a station', async () => {
    const avgDistance = await findAverageDistanceFromStation(1);
    expect(avgDistance).toBe(3948);
  });

  test('calculates average duration from a station', async () => {
    const avgDuration = await findAverageDurationFromStation(1);
    expect(avgDuration).toBe(1210);
  });

  test('gets combined station statistics', async () => {
    const stats = await getStationStatistics(1);
    expect(stats).toStrictEqual(
      {
        "averageDistance": 3948,
        "averageDuration": 1210,
        "journeysFromStation": 3,
        "journeysToStation": 0
      }
    );
  });
});
