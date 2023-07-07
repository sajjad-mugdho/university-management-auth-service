import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { ManagementDepartmanetService } from './managementDeparment.service';
import sendResponse from '../../../shared/sendResponse';
import { IManagementDepartments } from './managementDepartment.interface';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { managementDepartmentFilterableFields } from './managementDepartment.constant';
import { paginationField } from '../../../constants/pagination';

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

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, managementDepartmentFilterableFields);

  const paginationOptions = pick(req.query, paginationField);

  const result = await ManagementDepartmanetService.getAllDepartments(
    filters,
    paginationOptions
  );

  sendResponse<IManagementDepartments[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management departments fetched successfully',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ManagementDepartmanetService.getSingleDepartment(id);

  sendResponse<IManagementDepartments>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management department fetched successfully',
    data: result,
  });
});

const updateDepartment = catchAsync(
  catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const updatedData = req.body;
    const result = await ManagementDepartmanetService.updateDepartment(
      id,
      updatedData
    );

    sendResponse<IManagementDepartments>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management department updated successfully',
      data: result,
    });
  })
);

const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ManagementDepartmanetService.deleteDepartment(id);

  sendResponse<IManagementDepartments>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Management department deleted successfully',
    data: result,
  });
});
export const ManagementDepartmanetController = {
  createDepartment,
  getAllDepartments,
  getSingleDepartment,
  updateDepartment,
  deleteDepartment,
};
