import logger from '../../../../utils/logger.js';
import { SendResponse } from '../../../../utils/SendResponse.js';
import { createHashPwd } from '../../../../utils/password.js';
import Account from '../../../../models/account.js';

const createAdmin = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return SendResponse(res, 400, false, 'Full name, email, and password are required');
    }

    const hashedPassword =  createHashPwd(password);

    // Simulate admin creation logic
    const newAdmin = {
      fullName,
      email,
      password: hashedPassword,
      role: 'admin'
    };

    await Account.create(newAdmin);

    return SendResponse(res, 201, true, 'Admin created successfully', {
        fullName: newAdmin.fullName,
        email: newAdmin.email,
        role: newAdmin.role
    });
  } catch (error) {
    logger.error('Error creating admin:', error);
    return SendResponse(res, 500, false, 'Internal Server Error');
  }
};

export default createAdmin;