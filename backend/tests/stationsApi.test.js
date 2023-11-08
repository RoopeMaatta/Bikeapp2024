const supertest = require('supertest');
const app = require('../app'); // Adjust the path to where your Express app is defined

const api = supertest(app);

describe('API tests for stations', () => {
  test('data is returned as JSON', async () => {
    await api
      .get('/api/stations')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });


  test('all stations are returned', async () => {
    const response = await api.get('/api/stations')
    expect(response.body).toHaveLength(4)
  })


  test('statistics of station are returned', async () => {
    const response = await api
      .get('/api/station/1')
      .expect(200)
      .expect('Content-Type', /application\/json/);

    expect(response.body).toStrictEqual({
      stationName: "Keilalahti",
      stationAddress: "Keilalahdentie 2",
      averageDistance: 3948,
      averageDuration: 1210,
      journeysFromStation: 3,
      journeysToStation: 0
    });
  });


  test('non-existing station id should be handled gracefully', async () => {
    const response = await api
      .get('/api/station/19989888') // non-existing id
      .expect(404)
      .expect('Content-Type', /application\/json/);

    expect(response.body).toEqual({ error: 'Station not found' });
  });


  test('non-valid station id with text should be handled gracefully', async () => {
    const response = await api
      .get('/api/station/19989sdfsdf888') // non-valid with text
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body).toEqual({ error: 'Station ID must be a number' });
  });


  test('non-valid station id with decimals should be handled gracefully', async () => {
    const response = await api
      .get('/api/station/243.3432') // non-valid with decimals
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(response.body).toEqual({ error: 'Station ID must be an integer' });
  });



});
