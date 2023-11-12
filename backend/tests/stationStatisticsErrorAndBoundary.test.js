const stationServices = require('../services/stationServices');
const { Station, Journey } = require('../models');

// Sequelize model tests stationServices error cases

// Mock the Journey model functions
jest.mock('../models', () => ({
  Station: {
    findByPk: jest.fn()
  },
  Journey: {
    findAll: jest.fn()
  }
}));

describe('Station statistics services - Error Handling and Boundary Conditions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should handle database errors gracefully', async () => {
    // Simulate a database error
    Journey.findAll.mockRejectedValue(new Error('Database unavailable'));

    await expect(stationServices.findAllJourneysToStation(1)).rejects.toThrow('Database unavailable');
    await expect(stationServices.findAllJourneysFromStation(1)).rejects.toThrow('Database unavailable');
    // Repeat for other functions...
  });

  test('should return 0 when no journeys to a station', async () => {
    // Simulate no results
    Journey.findAll.mockResolvedValue([]);

    const journeysToStation = await stationServices.findAllJourneysToStation(1);
    expect(journeysToStation).toBe(0);
  });

  test('should return 0 when no journeys from a station', async () => {
    // Simulate no results
    Journey.findAll.mockResolvedValue([]);

    const journeysFromStation = await stationServices.findAllJourneysFromStation(1);
    expect(journeysFromStation).toBe(0);
  });

  test('should handle invalid stationId input', async () => {
    // Assuming that an invalid stationId would throw an error
    Journey.findAll.mockImplementation((query) => {
      if (typeof query.where.departure_station_id !== 'number') {
        throw new Error('Invalid stationId');
      }
      return Promise.resolve([]);
    });

    await expect(stationServices.findAllJourneysToStation('invalid')).rejects.toThrow('Invalid stationId');
    await expect(stationServices.findAllJourneysFromStation('invalid')).rejects.toThrow('Invalid stationId');
    // Repeat for other functions...
  });

  test('should handle non-existent stationId gracefully', async () => {
    // Mock the Station.findByPk to simulate that no station is found
    Station.findByPk.mockResolvedValue(null);

    // Mock the Journey.findAll to simulate that no journeys are found
    Journey.findAll.mockResolvedValue([]);

    // Expect the getStationStatistics to throw an error due to the non-existent station
    await expect(stationServices.getStationStatistics(999)).rejects.toThrow('Station not found');
  });


});
