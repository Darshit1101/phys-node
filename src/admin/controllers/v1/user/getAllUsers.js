import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import Account from "../../../../models/account.js";

const getAllUsers = async (req, res) => {
  try {
    // Get all users (excluding password field for security)
    const users = await Account.find({})
      .select("-password")
      .sort({ createdAt: -1 });

    // Count total users using Mongoose
    const total = await Account.countDocuments({});


    return sendResponse(res, 200, true, "Users retrieved successfully", {
      users,
      total,
    });
  } catch (error) {
    logger.error("Error retrieving users:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export default getAllUsers;
