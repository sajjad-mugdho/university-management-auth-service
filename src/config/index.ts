/* eslint-disable no-undef */
import dotenv from 'dotenv'
import path from 'path'
// eslint-disable-next-line no-undef
dotenv.config({ path: path.join(process.cwd(), '.env') })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_user_password: process.env.DEFAULT_USER_PASSWORD,
}
