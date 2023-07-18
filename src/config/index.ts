/* eslint-disable no-undef */
import dotenv from 'dotenv';
import path from 'path';
// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_student_password: process.env.DEFAULT_STUDENT_PASSWORD,
  bcrypt_salt_round: process.env.BCRYPT_SALT_ROUND,
};
