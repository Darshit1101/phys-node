import { Router } from 'express';
import getStats from '../../controllers/v1/dashboard/getStats.js';
import adminMiddleware from '../../middleware/adminMiddleware.js';

const router = Router();
router.get('/stats', adminMiddleware, getStats);

export default router;
