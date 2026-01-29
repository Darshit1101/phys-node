import logger from './logger.js';

export const sendResponse = (
  res,
  statusCode = 200,
  flag = true,
  message = '',
  data = {}
) => {
  try {
    return res.status(statusCode).json({
      code: statusCode,
      success: flag,
      message,
      data
    });
  } catch (error) {
    logger.info(error);
  }
};
