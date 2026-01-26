import { Router } from 'express';
import v1Router from './v1/zindex';

const appRouter = Router();
appRouter.use('/admin/v1', v1Router);

export default appRouter;
