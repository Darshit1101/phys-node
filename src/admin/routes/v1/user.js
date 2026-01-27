import { Router } from 'express';
import getAllUsers from '../../controllers/v1/user/getAllUsers.js';
import adminMiddleware from '../../middleware/admin.js';

const router = Router();
router.post('/getAllUsers', adminMiddleware, getAllUsers);

export default router;