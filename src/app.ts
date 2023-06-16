import express, { Application } from 'express';
import cors from 'cors';

import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './routes';

const app: Application = express();

// Coross Origine
app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application

// app.use('/api/v1/users/', UserRouter);
// app.use('/api/v1/academic-semester/', AcademicSemesterRoutes);
app.use('/api/v1', routes);

//Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   throw new Error('Testing')
// })

// Error handle

app.use(globalErrorHandler);

export default app;
