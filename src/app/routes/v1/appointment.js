import { Router } from 'express';
import bookAppointmentController from '../../controllers/v1/appointment/bookAppointment.js';
import appMiddleware from '../../middleware/appMiddleware.js';

const router = Router();
router.post('/book', appMiddleware, bookAppointmentController);

export default router;