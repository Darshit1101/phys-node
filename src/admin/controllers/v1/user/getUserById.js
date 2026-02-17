import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import Account from "../../../../models/account.js";
import PersonalDetails from "../../../../models/personalDetails.js";

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Account.findById(id).select("-password").lean();

    if (!user) {
      return sendResponse(res, 404, false, "User not found");
    }

    const personalDetails = await PersonalDetails.findOne({ 
      accountId: id 
    }).lean();

    return sendResponse(res, 200, true, "User retrieved successfully", {
      user,
      personalDetails
    });
  } catch (error) {
    logger.error("Error retrieving user:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export default getUserById;
