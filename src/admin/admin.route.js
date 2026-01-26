import { Router } from 'express';
import v1Router from './routes/v1/zindex.js';

const appRouter = Router();
appRouter.use('/admin/v1', v1Router);

export default appRouter;
