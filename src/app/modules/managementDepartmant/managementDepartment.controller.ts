import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { ManagementDepartmanetService } from './managementDeparment.service';
import sendResponse from '../../../shared/sendResponse';
import { IManagementDepartments } from './managementDepartment.interface';
import httpStatus from 'http-status';

const createDepartment = catchAsync(async (req: Request, res: Response) => {
  const { ...managementDepartmentData } = req.body;
  const result = await ManagementDepartmanetService.createDepartment(
    managementDepartmentData
  );

  sendResponse<IManagementDepartments>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Managemet Department Created Successfully',
    data: result,
  });
});

export const ManagementDepartmanetController = {
  createDepartment,
};
