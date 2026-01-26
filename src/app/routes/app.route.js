import { Router } from 'express';
import v1Router from './v1/zindex.js';

const appRouter = Router();
appRouter.use('/app/v1', v1Router);

export default appRouter;
