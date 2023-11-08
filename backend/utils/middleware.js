const logger = require('../utils/logger'); // Adjust the path as necessary

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  if (Object.keys(request.body).length !== 0) {
    logger.info('Body:  ', request.body);
  } else {
    logger.info('Body:  ', 'No body payload');
  }
  logger.info('---');
  next();
};

// Handler function to wrap each route
function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      // Forward error to the global error handler
      next(error);
    }
  };
}


function unknownEndpoint(request, response) {
  response.status(404).send({ error: 'unknown endpoint' });
}

function errorHandler(error, request, response, next) {
  logger.error(error.message);

  if (error.name === 'CastError') {
    response.status(400).json({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    response.status(400).json({ error: error.message });
  } else if (error.message === 'Station not found') {
    response.status(404).json({ error: 'Station not found' });
  } else {
    logger.error(error.stack);

    // Send a generic 500 error
    response.status(500).json({ error: 'internal server error' });

    next(error);
  }
}

function validateId(req, res, next) {
  const { stationId } = req.params;

  // Check if stationId is a number
  if (!stationId || isNaN(Number(stationId))) {
    return res.status(400).json({ error: 'Station ID must be a number' });
  }

  // Check if stationId is an integer
  if (!Number.isInteger(Number(stationId))) {
    return res.status(400).json({ error: 'Station ID must be an integer' });
  }

  // Proceed if validation is successful
  next();
}



module.exports = { requestLogger, asyncHandler, unknownEndpoint, errorHandler, validateId };

