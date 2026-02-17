import { Router } from 'express';
import getAllUsers from '../../controllers/v1/user/getAllUsers.js';
import getUserById from '../../controllers/v1/user/getUserById.js';
import adminMiddleware from '../../middleware/adminMiddleware.js';

const router = Router();
router.post(
  '/getAllUsers',
  adminMiddleware,
  getAllUsers
);
router.get('/:id', adminMiddleware, getUserById);

export default router;