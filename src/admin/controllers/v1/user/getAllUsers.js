import logger from '../../../../utils/logger.js';
import { SendResponse } from '../../../../utils/SendResponse.js';
import Account from '../../../../models/account.js';

const getAllUsers = async (req, res) => {
  try {
    // Get all users (excluding password field for security)
    const users = await Account.find({})
      .select('-password')
      .sort({ createdAt: -1 });

    return SendResponse(res, 200, true, 'Users retrieved successfully', {
      users,
      total: users.length
    });

  } catch (error) {
    logger.error('Error retrieving users:', error);
    return SendResponse(res, 500, false, 'Internal Server Error');
  }
};

export default getAllUsers;