import logger from '../../../../utils/logger.js';
import { SendResponse } from '../../../../utils/SendResponse.js';
import Account from '../../../../models/account.js';
import { comparePwd } from '../../../../utils/password.js';
import { generateToken } from '../../../../utils/token.js';
import { APP_JWT_SECRET } from '../../../../configs/environment.js';
import { setCookie } from '../../../../utils/setCookie.js';
import { Role } from '../../../../constants/Role.js';

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return SendResponse(res, 400, false, 'Email and password are required');
    }

    // Find user by email
    const user = await Account.findOne({ email });
    if (!user) {
      return SendResponse(res, 401, false, 'Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await comparePwd(password, user.password);
    if (!isPasswordValid) {
      return SendResponse(res, 401, false, 'Invalid credentials');
    }

    // Generate JWT token
    const token = generateToken(
      {
        id: user._id,
        role: Role.USER,
      },
      APP_JWT_SECRET,
      '3d'
    );

    // Set HTTP-only cookie
    setCookie(res, 'authToken', token, {
      maxAge: 3 * 24 * 60 * 60 * 1000
    });

    return SendResponse(res, 200, true, 'Login successful', {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
    });

  } catch (error) {
    logger.error('Error logging in user:', error);
    return SendResponse(res, 500, false, 'Internal Server Error');
  }
};

export default loginUser;