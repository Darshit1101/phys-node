import { Router } from 'express';
import getAllUsers from '../../controllers/v1/user/getAllUsers.js';
import authMiddleware from '../../../middleware/auth.js';

const router = Router();
router.post('/getAllUsers', authMiddleware, getAllUsers);

export default router;