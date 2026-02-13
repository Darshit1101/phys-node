import PersonalDetails from "../../../../models/personalDetails.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const upsertProfile = async (req, res) => {
    try {
        const accountId = req.user.id;

        if (!accountId) {
            return sendResponse(res, 400, false, "accountId is required");
        }

        const profile = await PersonalDetails.findOneAndUpdate(
            { accountId },
            req.body,
            {
                new: true,           // return updated doc
                upsert: true,        // create if not exists
                runValidators: true  // validate schema rules
            }
        );

        return sendResponse(res, 200, true, "Profile saved successfully", profile);
    } catch (error) {
        logger.error("Error saving profile:", error);
        return sendResponse(res, 400, false, error.message);
    }
};

export default upsertProfile;
