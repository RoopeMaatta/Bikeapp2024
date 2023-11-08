const { Station, Journey } = require('../models');
const { Sequelize } = require('sequelize');


exports.findAllJourneysToStation = async function (stationId) {
  const journeys = await Journey.findAll({ where: { return_station_id: stationId } });
  return journeys.length;
}

exports.findAllJourneysFromStation = async function (stationId) {
  const journeys = await Journey.findAll({ where: { departure_station_id: stationId } });
  return journeys.length
}

exports.findAverageDistanceFromStation = async function (stationId) {
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
}


exports.findAverageDurationFromStation = async function (stationId) {
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
}


// Combining functions

const {
  findAllJourneysToStation,
  findAllJourneysFromStation,
  findAverageDistanceFromStation,
  findAverageDurationFromStation
} = exports;


exports.getStationStatistics = async function (stationId) {
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
}