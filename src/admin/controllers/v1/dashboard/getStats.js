import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import Account from "../../../../models/account.js";
import Appointment from "../../../../models/appointment.js";

const getStats = async (req, res) => {
  try {
    const [userCount, appointmentCount] = await Promise.all([
      Account.countDocuments(),
      Appointment.countDocuments()
    ]);

    return sendResponse(res, 200, true, "Stats retrieved successfully", {
      userCount,
      appointmentCount
    });
  } catch (error) {
    logger.error("Error retrieving stats:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export default getStats;
