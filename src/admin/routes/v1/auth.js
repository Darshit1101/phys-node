import { Router } from 'express';
import createAdminController from '../../controllers/v1/auth/createAdmin.js';

const router = Router();
router.post('/create-admin', createAdminController);

export default router;