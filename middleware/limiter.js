const rateLimit = require('express-rate-limit');

exports.createLimiter = () =>
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 15,
    message: {
      success: false,
      error: "Too many requests, please try again later.",
    },
  });