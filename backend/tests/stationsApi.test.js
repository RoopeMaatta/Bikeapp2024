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
      averageDistance: 3948,
      averageDuration: 1210,
      journeysFromStation: 3,
      journeysToStation: 0
    });
  });


});
