CREATE TABLE stations (
  id SERIAL PRIMARY KEY,
  station_name VARCHAR(255),
  station_address VARCHAR(255),
  coordinate_x VARCHAR(50),
  coordinate_y VARCHAR(50)
);

CREATE TABLE journeys (
  id SERIAL PRIMARY KEY,
  departure_date_time TIMESTAMP,
  return_date_time TIMESTAMP,
  departure_station_id INTEGER REFERENCES stations(id),
  return_station_id INTEGER REFERENCES stations(id),
  distance INT,
  duration INT
);
