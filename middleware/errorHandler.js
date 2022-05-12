import ErrorResponse from '../utils/errorResponse.js';

// eslint-disable-next-line no-unused-vars
function errorHandler(err, req, res, next) {
  console.log(err);

  let error = { ...err };

  error.message = err.message;

  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new ErrorResponse(message, 404);
  }

  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    error = new ErrorResponse(message, 400);
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors)
      // eslint-disable-next-line no-shadow
      .map((error) => error.message)
      .join(', ');
    error = new ErrorResponse(message, 400);
  }

  // add more errors

  res.status(error.StatusCode || 500).json({
    success: false,
    error: error.message || 'Server Error',
  });
}

export default errorHandler;
