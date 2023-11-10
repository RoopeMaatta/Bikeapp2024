export const groupStations = (stations) => {
  return stations.reduce((acc, station) => {
    const firstLetter = station.station_name[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(station);
    return acc;
  }, {});
};
