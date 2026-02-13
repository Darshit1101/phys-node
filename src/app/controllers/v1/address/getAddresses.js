import Address from "../../../../models/address.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const getAddresses = async (req, res) => {
    try {
        const addresses = await Address.find({ accountId: req.query.accountId });
        return sendResponse(res, 200, true, "Addresses fetched successfully", addresses);
    } catch (error) {
        logger.error("Error fetching addresses:", error);
        return sendResponse(res, 500, false, error.message);
    }
};

export default getAddresses;
