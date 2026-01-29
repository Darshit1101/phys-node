import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import { createHashPwd } from "../../../../utils/password.js";
import Account from "../../../../models/account.js";
import generateCustomId from "../../../../utils/customID/generateCustomId.js";
import { customIdPrefix } from "../../../../constants/CustomIdPrefix.js";

const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return sendResponse(
        res,
        400,
        false,
        "Full name, email, and password are required",
      );
    }

    const existingUser = await Account.findOne({ email });
    if (existingUser) {
      return sendResponse(
        res,
        409,
        false,
        "User with this email already exists",
      );
    }

    const hashedPassword = createHashPwd(password);

    const newUser = {
      fullName,
      email,
      password: hashedPassword,
      customId: generateCustomId(customIdPrefix.CUSTOMER),
    };

    await Account.create(newUser);

    return sendResponse(res, 201, true, "User created successfully", {
      fullName: newUser.fullName,
      email: newUser.email,
    });
  } catch (error) {
    logger.error("Error creating user:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export default createUser;
