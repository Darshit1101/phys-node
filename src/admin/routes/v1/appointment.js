import { Router } from 'express';
import getAllAppointments from '../../controllers/v1/appointment/getAllAppointments.js';
import adminMiddleware from '../../middleware/adminMiddleware.js';

const router = Router();
router.post('/getAllAppointments', adminMiddleware, getAllAppointments);

export default router;
