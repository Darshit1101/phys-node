import logger from './logger.js';

export const SendResponse = (
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
