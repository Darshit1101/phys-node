import PersonalDetails from "../../../../models/personalDetails.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const getProfile = async (req, res) => {
    try {
        const id = req.user.id;
        const profile = await PersonalDetails.findOne({ accountId: id });

        if (!profile) {
            return sendResponse(res, 404, false, "Profile not found");
        }

        return sendResponse(res, 200, true, "Profile fetched successfully", profile);
    } catch (error) {
        logger.error("Error fetching profile:", error);
        return sendResponse(res, 500, false, error.message);
    }
};

export default getProfile;
