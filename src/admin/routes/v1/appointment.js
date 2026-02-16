import { Router } from 'express';
import getAllAppointments from '../../controllers/v1/appointment/getAllAppointments.js';
import getAppointmentById from '../../controllers/v1/appointment/getAppointmentById.js';
import adminMiddleware from '../../middleware/adminMiddleware.js';

const router = Router();
router.post('/getAllAppointments', adminMiddleware, getAllAppointments);
router.get('/:id', adminMiddleware, getAppointmentById);

export default router;
