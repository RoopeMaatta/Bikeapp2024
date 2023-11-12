const logger = require('../utils/logger');

// Middleware utilities for logging and error handling in Express

// Log each incoming request
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

// Middleware wrapper for async route handlers
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

// Handler for requests to unknown endpoints
function unknownEndpoint(request, response) {
  response.status(404).send({ error: 'unknown endpoint' });
}

// Global error handler middleware
function errorHandler(error, request, response, next) {
  logger.error(error.message);

  if (error.name === 'CastError') {
    response.status(400).json({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    response.status(400).json({ error: error.message });
  } else if (error.message.includes(' not found')) {
    response.status(404).json({ error: error.message });
  } else {
    logger.error(error.stack);

    // Send a generic 500 error
    response.status(500).json({ error: 'internal server error' });

    next(error);
  }
}

// Validate stationId parameter in the request
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

