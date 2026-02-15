import { Router } from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';
import appointmentRouter from './appointment.js';
import dashboardRouter from './dashboard.js';

const v1Router = Router();
v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/appointment', appointmentRouter);
v1Router.use('/dashboard', dashboardRouter);

export default v1Router;
