require('dotenv').config();

const express = require('express');
const cors = require('cors');
const stationsRouter = require('./routes/stations'); // Import the router

const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json()); // To parse JSON bodies

app.use('/api/stations', stationsRouter); // Use the stations router with a specific path

app.get('/', (req, res) => {
  res.send('Hello World backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});