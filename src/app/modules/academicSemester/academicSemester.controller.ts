import { Request, Response } from 'express';

import { logger } from '../../../shared/logger';
import { AcademicSemesterSercvice } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationField } from '../../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';

const cretaeSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  logger.info('data:', academicSemesterData);
  const result = await AcademicSemesterSercvice.cretaeSemester(
    academicSemesterData
  );
  logger.info('result:', result);

  //
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Created Successfully',
    data: result,
  });
});

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, ['searchTerm', 'title', 'code', 'yaer']);
  const paginationOptions = pick(req.query, paginationField);

  const result = await AcademicSemesterSercvice.getAllSemesters(
    filters,
    paginationOptions
  );

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semesters retrieved successfully !',
    // meta: result.meta,
    data: result.data,
  });
});
export const AcademicSemesterController = {
  cretaeSemester,
  getAllSemesters,
};
