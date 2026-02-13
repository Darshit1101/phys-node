import { Router } from 'express';
import authRouter from './auth.js';
import appointmentRouter from './appointment.js';
import addressRouter from './addressRoutes.js';
import profileRouter from './profileRoutes.js';

const v1Router = Router();
v1Router.use('/auth', authRouter);
v1Router.use('/appointment', appointmentRouter);
v1Router.use('/address', addressRouter);
v1Router.use('/profile', profileRouter);

export default v1Router;