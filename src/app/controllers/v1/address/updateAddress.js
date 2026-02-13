import Address from "../../../../models/address.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const updateAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!address) {
            return sendResponse(res, 404, false, "Address not found");
        }
        return sendResponse(res, 200, true, "Address updated successfully", address);
    } catch (error) {
        logger.error("Error updating address:", error);
        return sendResponse(res, 400, false, error.message);
    }
};

export default updateAddress;
