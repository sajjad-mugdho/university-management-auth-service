import { Request, Response } from 'express';

import { AcademicSemesterSercvice } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';

import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { paginationField } from '../../../constants/pagination';
import { IAcademicSemester } from './academicSemester.interface';
import { academicSemesterFilterAbleField } from './academicSemester.constant';
import sendResponse from '../../../shared/sendResponse';

const cretaeSemester = catchAsync(async (req: Request, res: Response) => {
  const { ...academicSemesterData } = req.body;
  console.log('data:', academicSemesterData);
  const result = await AcademicSemesterSercvice.cretaeSemester(
    academicSemesterData
  );
  console.log('result:', result);

  //
  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Created Successfully',
    data: result,
  });
});

const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterAbleField);
  const paginationOptions = pick(req.query, paginationField);

  const result = await AcademicSemesterSercvice.getAllSemesters(
    filters,
    paginationOptions
  );

  sendResponse<IAcademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semesters retrieved successfully !',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await AcademicSemesterSercvice.getSingleSemester(id);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester retrieved successfully !',
    data: result,
  });
});

const updateSemester = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await AcademicSemesterSercvice.updateSemester(id, updatedData);

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester updated successfully !',
    data: result,
  });
});

const deleteAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await AcademicSemesterSercvice.deleteSemester(id);

    sendResponse<IAcademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Semester Deleted successfully !',
      data: result,
    });
  }
);
export const AcademicSemesterController = {
  cretaeSemester,
  getAllSemesters,
  getSingleSemester,
  updateSemester,
  deleteAcademicSemester,
};
