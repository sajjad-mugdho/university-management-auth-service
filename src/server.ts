/* eslint-disable no-console */
/* eslint-disable no-undef */
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { logger, errorLogger } from './shared/logger';
import { Server } from 'http';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});
let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info('🗃 Database Connected');

    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Faield to connect', error);
  }

  process.on('unhandledRejection', error => {
    console.log('unhandle reajection detected, we are closing server');
    if (server) {
      server.close(() => {
        errorLogger.error(error);

        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  logger.info('SIGTERM Recived');
  if (server) {
    server.close();
  }
});
