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


function errorHandler(error, request, response, next) { // eslint-disable-line no-unused-vars
  logger.error(error.message); // Replace with your logger if you have one

  if (error.name === 'CastError') {
    response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    response.status(400).json({ error: error.message });
  } else {
    response.status(500).json({ error: 'internal server error' });
  }
}





module.exports = { requestLogger, asyncHandler, unknownEndpoint, errorHandler };

