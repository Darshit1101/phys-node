import { Router } from 'express';
import authRouter from './auth.js';
import appointmentRouter from './appointment.js';
import addressRouter from './addressRoutes.js';

const v1Router = Router();
v1Router.use('/auth', authRouter);
v1Router.use('/appointment', appointmentRouter);
v1Router.use('/address', addressRouter);

export default v1Router;