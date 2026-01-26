import express from 'express';
import cors from 'cors';
import { PORT } from './configs/environment.js';
import connectDB from "./configs/db.js"
import { logger } from './utils/logger.js';
import  { SendResponse }  from './utils/sendResponse.js';

const app = express();
await connectDB();

app.use(cors());
app.use(express.json());

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