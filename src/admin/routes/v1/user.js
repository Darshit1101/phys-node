import { Router } from 'express';
import getAllUsers from '../../controllers/v1/user/getAllUsers.js';
import authMiddleware from '../../../middleware/authMiddleware.js';
import { Cookie } from '../../../constants/Cookies.js';

const router = Router();
router.post(
  '/getAllUsers',
  authMiddleware([Cookie.ADMIN_TOKEN, Cookie.AUTH_TOKEN]),
  getAllUsers
);

export default router;