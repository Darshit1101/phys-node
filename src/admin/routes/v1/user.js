import { Router } from 'express';
import getAllUsers from '../../controllers/v1/user/getAllUsers.js';

const router = Router();
router.post('/getAllUsers', getAllUsers);

export default router;