import Address from "../../../../models/address.js";
import { sendResponse } from "../../../../utils/sendResponse.js";
import logger from "../../../../utils/logger.js";

const setDefaultAddress = async (req, res) => {
    try {
        const accountId = req.user.id;
        const { id } = req.params;

        await Address.updateMany({ accountId }, { isDefault: false });
        const address = await Address.findByIdAndUpdate(id, { isDefault: true }, { new: true });

        if (!address) {
            return sendResponse(res, 404, false, "Address not found");
        }

        return sendResponse(res, 200, true, "Default address updated successfully", address);
    } catch (error) {
        logger.error("Error setting default address:", error);
        return sendResponse(res, 500, false, error.message);
    }
};

export default setDefaultAddress;
