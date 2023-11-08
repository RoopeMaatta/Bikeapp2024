require('dotenv').config();

const express = require('express');
const cors = require('cors');
const stationsRouter = require('./routes/stations');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/stations', stationsRouter);

app.get('/', (req, res) => {
  res.send('Hello World backend!');
});

module.exports = app;
