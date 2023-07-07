import { SortOrder } from 'mongoose';
import { PaginationHelper } from '../../../helper/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { managementDepartmentSearchableFields } from './managementDepartment.constant';
import {
  IManagementDepartments,
  IManagementDepartmentsFilters,
} from './managementDepartment.interface';
import { ManagementDepartmanet } from './managementDepartment.model';

const createDepartment = async (
  payload: IManagementDepartments
): Promise<IManagementDepartments | null> => {
  const result = await ManagementDepartmanet.create(payload);
  return result;
};

const getSingleDepartment = async (
  id: string
): Promise<IManagementDepartments | null> => {
  const result = await ManagementDepartmanet.findById(id);
  return result;
};

const getAllDepartments = async (
  filters: IManagementDepartmentsFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IManagementDepartments[]>> => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelper.calculatePagination(paginationOptions);

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: managementDepartmentSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  // Dynamic sort needs fiekd to do sorting

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await ManagementDepartmanet.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await ManagementDepartmanet.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const updateDepartment = async (
  id: string,
  payload: Partial<IManagementDepartments>
): Promise<IManagementDepartments | null> => {
  const result = await ManagementDepartmanet.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );
  return result;
};

const deleteDepartment = async (
  id: string
): Promise<IManagementDepartments | null> => {
  const result = await ManagementDepartmanet.findByIdAndDelete(id);
  return result;
};

export const ManagementDepartmanetService = {
  createDepartment,
  getAllDepartments,
  deleteDepartment,
  updateDepartment,
  getSingleDepartment,
};
