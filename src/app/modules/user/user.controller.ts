import { Request, Response } from 'express';

import { logger } from '../../../shared/logger';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  logger.info('data:', data);
  const result = await UserService.createUserDB(data.user);
  logger.info('result:', result);

  //
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully',
    data: result,
  });
  // next();
});

export const UserController = {
  createUser,
};
