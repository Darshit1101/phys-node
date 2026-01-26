import { Router } from 'express';
import createAdminController from '../../controllers/v1/auth/createAdmin.js';
import loginAdminController from '../../controllers/v1/auth/loginAdmin.js';
import logoutAdminController from '../../controllers/v1/auth/logoutAdmin.js';

const router = Router();
router.post('/create-admin', createAdminController);
router.post('/login-admin', loginAdminController);
router.post('/logout-admin', logoutAdminController);

export default router;