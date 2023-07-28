import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.contoller';

const router = express.Router();

router.post(
  '/login',
  validateRequest(AuthValidation.loginZodValidation),
  AuthController.loginUser
);
export const AuthRoutes = router;
