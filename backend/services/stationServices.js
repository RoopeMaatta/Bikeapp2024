const { Station, Journey } = require('../models');
const { Sequelize } = require('sequelize');

// Construct query to get station and journey data.

// Find total number of journeys to a station
const findAllJourneysToStation = async (stationId) => {
  const journeys = await Journey.findAll({ where: { return_station_id: stationId } });
  return journeys.length;
};

// Find total number of journeys from a station
const findAllJourneysFromStation = async (stationId) => {
  const journeys = await Journey.findAll({ where: { departure_station_id: stationId } });
  return journeys.length;
};

// Calculate average distance of journeys from a station
const findAverageDistanceFromStation = async (stationId) => {
  const result = await Journey.findAll({
    where: { departure_station_id: stationId },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('distance')), 'averageDistance']
    ],
    raw: true,
  });
  // if result is null return 0, else return distance
  return result.length > 0 && result[0].averageDistance !== null
    ? Math.round(parseFloat(result[0].averageDistance))
    : 0;
};

// Calculate average duration of journeys from a station
const findAverageDurationFromStation = async (stationId) => {
  const result = await Journey.findAll({
    where: { departure_station_id: stationId },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('duration')), 'averageDuration']
    ],
    raw: true,
  });
  // if result is null return 0, else return duration
  return result.length > 0 && result[0].averageDuration !== null
    ? Math.round(parseFloat(result[0].averageDuration))
    : 0;
};

// Gather comprehensive statistics for a station
const getStationStatistics = async (stationId) => {
  const station = await Station.findByPk(stationId);
  if (!station) {
    throw new Error('Station not found');
  }

  const journeysToStation = await findAllJourneysToStation(stationId);
  const journeysFromStation = await findAllJourneysFromStation(stationId);
  const averageDistance = await findAverageDistanceFromStation(stationId);
  const averageDuration = await findAverageDurationFromStation(stationId);

  return {
    stationName: station.station_name,
    stationAddress: station.station_address,
    journeysToStation,
    journeysFromStation,
    averageDistance,
    averageDuration,
  };
};

module.exports = {
  findAllJourneysToStation,
  findAllJourneysFromStation,
  findAverageDistanceFromStation,
  findAverageDurationFromStation,
  getStationStatistics
};
