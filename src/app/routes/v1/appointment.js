import { Router } from 'express';
import bookAppointmentController from '../../controllers/v1/appointment/bookAppointment.js';
import getAppointments from '../../controllers/v1/appointment/getAppointments.js';
import appMiddleware from '../../middleware/appMiddleware.js';

const router = Router();
router.post('/book', appMiddleware, bookAppointmentController);
router.get('/list', appMiddleware, getAppointments);

export default router;