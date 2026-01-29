import logger from "../../../../utils/logger.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import { createHashPwd } from "../../../../utils/password.js";
import Admin from "../../../../models/admin.js";

const createAdmin = async (req, res) => {
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

    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return sendResponse(
        res,
        409,
        false,
        "Admin with this email already exists",
      );
    }

    const hashedPassword = createHashPwd(password);

    const newAdmin = {
      fullName,
      email,
      password: hashedPassword,
    };

    await Admin.create(newAdmin);

    return sendResponse(res, 201, true, "Admin created successfully", {
      fullName: newAdmin.fullName,
      email: newAdmin.email,
    });
  } catch (error) {
    logger.error("Error creating admin:", error);
    return sendResponse(res, 500, false, "Internal Server Error");
  }
};

export default createAdmin;
