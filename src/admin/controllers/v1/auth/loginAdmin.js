import logger from '../../../../utils/logger.js';
import { SendResponse } from '../../../../utils/SendResponse.js';
import Admin from '../../../../models/admin.js';
import { comparePwd } from '../../../../utils/password.js';
import { generateToken } from '../../../../utils/token.js';
import { APP_JWT_SECRET } from '../../../../configs/environment.js';
import { setCookie } from '../../../../utils/setCookie.js';

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return SendResponse(res, 400, false, 'Email and password are required');
    }

    // Find admin by email
    const admin = await Admin.findOne({ email});
    if (!admin) {
      return SendResponse(res, 401, false, 'Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await comparePwd(password, admin.password);
    if (!isPasswordValid) {
      return SendResponse(res, 401, false, 'Invalid credentials');
    }

    // Generate JWT token
    const token = generateToken(
      {
        id: admin._id,
      },
      APP_JWT_SECRET,
      '3d'
    );

    // Set HTTP-only cookie
    setCookie(res, 'authToken', token, {
      maxAge: 3 * 24 * 60 * 60 * 1000
    });

    return SendResponse(res, 200, true, 'Login successful', {
        _id: admin._id,
        fullName: admin.fullName,
        email: admin.email,
    });

  } catch (error) {
    logger.error('Error logging in admin:', error);
    return SendResponse(res, 500, false, 'Internal Server Error');
  }
};

export default loginAdmin;