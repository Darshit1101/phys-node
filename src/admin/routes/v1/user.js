import { Router } from 'express';
import getAllUsers from '../../controllers/v1/user/getAllUsers.js';
import authMiddleware from '../../../middleware/authMiddleware.js';
import { allowRoles } from '../../../middleware/roleMiddleware.js';

const router = Router();
router.post('/getAllUsers', authMiddleware, allowRoles("admin"), getAllUsers);

export default router;