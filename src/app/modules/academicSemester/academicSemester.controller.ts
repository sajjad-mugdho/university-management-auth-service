import { Request, Response } from 'express';

import { logger } from '../../../shared/logger';
import { AcademicSemesterSercvice } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
const cretaeSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  logger.info('data:', academicSemesterData);
  const result = await AcademicSemesterSercvice.cretaeSemester(
    academicSemesterData
  );
  logger.info('result:', result);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Created Successfully',
    data: result,
  });
});

export const AcademicSemesterController = {
  cretaeSemester,
};
