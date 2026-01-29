import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import { Cookie } from "../../../../constants/Cookies.js";

const logout = async (req, res) => {
  try {
    res.clearCookie(Cookie.ADMIN_TOKEN, {
      httpOnly: true,
      secure: true,
      sameSite: "strict", //CSRF protection High
    });

    return sendResponse(res, 200, true, "Logout successfully");
  } catch (error) {
    logger.error("Logout failed:", error);
    return sendResponse(res, 400, false, error.message, error);
  }
};

export default logout;
