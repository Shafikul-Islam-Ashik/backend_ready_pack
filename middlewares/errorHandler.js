// create error handler
const errorHandler = (error, req, res, next) => {
  // status code
  const status = res.statusCode ? res.statusCode : 500;

  // response
  res.status(status).json({ message: error.message });
};

// export default
export default errorHandler;
