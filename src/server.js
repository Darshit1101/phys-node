import express from 'express';
import cors from 'cors';
import { PORT, ADMIN_APP_URL, APP_URL } from './configs/environment.js';
import connectDB from "./configs/db.js"
import { logger } from './utils/logger.js';
import { SendResponse } from './utils/SendResponse.js';
import adminRouter from './admin/admin.route.js';
import appRouter from './app/app.route.js';
import { cookieParser } from './middleware/cookieParser.js'

const app = express();
await connectDB();

// CORS configuration
const allowedOrigins = [APP_URL, ADMIN_APP_URL];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS blocked'));
      }
    },
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser);

app.use(adminRouter);
app.use(appRouter);

app.use((req, res) => {
  return SendResponse(
    res,
    404,
    false,
    `404 - Route Not Found: ${req.originalUrl}`
  );
});

app.listen(PORT, () => {
  logger.log(`http://localhost:${PORT}`);
});