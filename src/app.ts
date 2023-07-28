import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './routes';
import httpStatus from 'http-status';
import cookieParser from 'cookie-parser';

const app: Application = express();

// Coross Origine
app.use(cors());

//parser
app.use(express.json());
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

// Error handle
//handle not found
app.use((req: Request, res: Response) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
});

app.use(globalErrorHandler);

export default app;
