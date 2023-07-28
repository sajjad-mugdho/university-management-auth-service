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
router.post(
  '/refresh-token',
  validateRequest(AuthValidation.refreshTokenZodScema),
  AuthController.refreshToken
);
export const AuthRoutes = router;
