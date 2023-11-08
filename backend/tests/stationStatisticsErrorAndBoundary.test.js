const stationServices = require('../services/stationServices');
const { Journey } = require('../models');

// Mock the Journey model functions
jest.mock('../models', () => ({
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
    // Simulate a stationId that doesn't exist in the database
    Journey.findAll.mockResolvedValue([]);

    const stats = await stationServices.getStationStatistics(999);
    expect(stats).toEqual({
      journeysToStation: 0,
      journeysFromStation: 0,
      averageDistance: 0,
      averageDuration: 0
    });
  });
});
