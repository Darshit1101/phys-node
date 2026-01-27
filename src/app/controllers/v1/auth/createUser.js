import logger from '../../../../utils/logger.js';
import { SendResponse } from '../../../../utils/SendResponse.js';
import { createHashPwd } from '../../../../utils/password.js';
import Account from '../../../../models/account.js';

const createUser = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return SendResponse(res, 400, false, 'Full name, email, and password are required');
    }

    const existingUser = await Account.findOne({ email });
    if (existingUser) {
      return SendResponse(res, 409, false, 'User with this email already exists');
    }

    const hashedPassword = createHashPwd(password);

    const newUser = {
      fullName,
      email,
      password: hashedPassword,
    };

    await Account.create(newUser);

    return SendResponse(res, 201, true, 'User created successfully', {
      fullName: newUser.fullName,
      email: newUser.email,
    });

  } catch (error) {
    logger.error('Error creating user:', error);
    return SendResponse(res, 500, false, 'Internal Server Error');
  }
};

export default createUser;