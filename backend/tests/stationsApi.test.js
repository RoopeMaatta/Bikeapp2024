const supertest = require('supertest');
const app = require('../app'); // Adjust the path to where your Express app is defined

const api = supertest(app);

describe('API tests for stations', () => {
  test('data is returned as JSON', async () => {
    await api
      .get('/api/stations') // Make sure this endpoint matches your actual API route
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('all stations are returned', async () => {
    const response = await api.get('/api/stations')
    expect(response.body).toHaveLength(4)
  })

});
