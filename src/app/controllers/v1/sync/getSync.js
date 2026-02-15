import Address from "../../../../models/address.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const getSync = async (req, res) => {
    try {
        const accountId = req.user.id;
        const defaultAddress = await Address.findOne({ accountId, isDefault: true });
        
        if (!defaultAddress) {
            return sendResponse(res, 404, false, "No default address found");
        }

        return sendResponse(res, 200, true, "Sync data fetched successfully", {
            defaultAddressId: defaultAddress._id
        });
    } catch (error) {
        logger.error("Error fetching sync data:", error);
        return sendResponse(res, 500, false, error.message);
    }
};

export default getSync;
