import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import Account from "../../../../models/account.js";
import getPagination from "../../../../utils/pagination.js";

const getAllUsers = async (req, res) => {
  try {
    const { page, limit, skip } = getPagination(req.query);

    const users = await Account.find({})
      .select("-password")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Account.countDocuments({});

    return sendResponse(res, 200, true, "Users retrieved successfully", {
      users,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    logger.error("Error retrieving users:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export default getAllUsers;
