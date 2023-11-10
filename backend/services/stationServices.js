const { Station, Journey } = require('../models');
const { Sequelize } = require('sequelize');

const findAllJourneysToStation = async (stationId) => {
  const journeys = await Journey.findAll({ where: { return_station_id: stationId } });
  return journeys.length;
};

const findAllJourneysFromStation = async (stationId) => {
  const journeys = await Journey.findAll({ where: { departure_station_id: stationId } });
  return journeys.length;
};

const findAverageDistanceFromStation = async (stationId) => {
  const result = await Journey.findAll({
    where: { departure_station_id: stationId },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('distance')), 'averageDistance']
    ],
    raw: true,
  });

  return result.length > 0 && result[0].averageDistance !== null
    ? Math.round(parseFloat(result[0].averageDistance))
    : 0;
};

const findAverageDurationFromStation = async (stationId) => {
  const result = await Journey.findAll({
    where: { departure_station_id: stationId },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('duration')), 'averageDuration']
    ],
    raw: true,
  });

  return result.length > 0 && result[0].averageDuration !== null
    ? Math.round(parseFloat(result[0].averageDuration))
    : 0;
};

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
