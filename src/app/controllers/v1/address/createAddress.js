import Address from "../../../../models/address.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const createAddress = async (req, res) => {
    try {
        const address = await Address.create(req.body);
        return sendResponse(res, 201, true, "Address created successfully", address);
    } catch (error) {
        logger.error("Error creating address:", error);
        return sendResponse(res, 400, false, error.message);
    }
};

export default createAddress;
