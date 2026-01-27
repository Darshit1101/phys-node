import logger from '../../../../utils/logger.js';
import { SendResponse } from '../../../../utils/SendResponse.js';
import { Cookie } from '../../../../constants/Cookies.js';

const logout = async (req, res) => {
  try {
    res.clearCookie(Cookie.ADMIN_TOKEN, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict' //CSRF protection High
    });

    return SendResponse(res, 200, true, 'Logout successfully');
  } catch (error) {
    logger.error('Logout failed:', error);
    return SendResponse(res, 400, false, error.message, error);
  }
};

export default logout;