const errorResponse = (res, { statusCode = 500, error = "server error." }) => {
  return res.status(statusCode).json({
    success: false,
    error: error,
  });
};

const successResponse = (
  res,
  code = 200,
  message = "",
  data = {}
) => {
  return res.status(code).json({
    success: true,
    message: message,
    data: data,
  });
};

module.exports = { errorResponse, successResponse };
