import { Router } from 'express';
import createUserController from '../../controllers/v1/auth/createUser.js';
import loginAdminController from '../../controllers/v1/auth/loginAdmin.js';
import logoutAdminController from '../../controllers/v1/auth/logoutAdmin.js';

const router = Router();
router.post('/create-user', createUserController);
router.post('/login-user', loginAdminController);
router.post('/logout-user', logoutAdminController);

export default router;