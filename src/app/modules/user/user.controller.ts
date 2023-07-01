import { Request, Response } from 'express';

import { logger } from '../../../shared/logger';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const { student, ...studentData } = req.body;
  logger.info('data:', studentData);
  const result = await UserService.createStudent(student, studentData);
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
  createStudent,
};
