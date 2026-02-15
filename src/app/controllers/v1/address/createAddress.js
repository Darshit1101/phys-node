import Address from "../../../../models/address.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const createAddress = async (req, res) => {
    try {
        const userId = req.user.id;
        const existingAddressCount = await Address.countDocuments({ accountId: userId });
        
        const addressData = {
            ...req.body,
            isDefault: existingAddressCount === 0 ? true : false
        };
        
        const address = await Address.create(addressData);
        return sendResponse(res, 201, true, "Address created successfully", address);
    } catch (error) {
        logger.error("Error creating address:", error);
        return sendResponse(res, 400, false, error.message);
    }
};

export default createAddress;
