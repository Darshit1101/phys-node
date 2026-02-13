import Address from "../../../../models/address.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const getAddress = async (req, res) => {
    try {
        const address = await Address.findById(req.params.id);
        if (!address) {
            return sendResponse(res, 404, false, "Address not found");
        }
        return sendResponse(res, 200, true, "Address fetched successfully", address);
    } catch (error) {
        logger.error("Error fetching address:", error);
        return sendResponse(res, 500, false, error.message);
    }
};

export default getAddress;
