/* eslint-disable no-console */
/* eslint-disable no-undef */
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});
let server: Server;
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('🗃 Database Connected');

    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('Faield to connect', error);
  }

  process.on('unhandledRejection', error => {
    console.log('unhandle reajection detected, we are closing server');
    if (server) {
      server.close(() => {
        console.log(error);

        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

bootstrap();

process.on('SIGTERM', () => {
  console.log('SIGTERM Recived');
  if (server) {
    server.close();
  }
});
