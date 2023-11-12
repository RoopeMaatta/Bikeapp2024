require('dotenv').config();

// Main Express application setup with routes and middleware

const express = require('express');
const cors = require('cors');
const { requestLogger } = require('./utils/middleware');
const { unknownEndpoint, errorHandler } = require('./utils/middleware');
const stationsRouter = require('./routes/stations');
const singleStationRouter = require('./routes/singleStation');

const app = express();

app.use(cors());
app.use(express.json());

app.use(requestLogger); // Make sure to use this before your routes are defined


app.get('/', (req, res) => {
  res.send('Hello World backend!');
});
app.use('/api/stations', stationsRouter);
app.use('/api/stations', singleStationRouter);


app.use(unknownEndpoint); // Use the unknown endpoint middleware after all route handlers
app.use(errorHandler);

module.exports = app;
