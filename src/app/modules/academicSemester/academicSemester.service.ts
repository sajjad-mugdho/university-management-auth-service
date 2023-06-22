import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';

import {
  IAcademicSemester,
  IAcademicSemesterFilters,
} from './academicSemester.interface';

import { AcademicSemester } from './academicSemester.model';
import { IPaginationOptions } from '../../../interfaces/pagination';

import { IGenericResponse } from '../../../interfaces/common';
import { PaginationHelper } from '../../../helper/paginationHelper';
import { SortOrder } from 'mongoose';

const cretaeSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semester Code', '');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemesters = async (
  filters: IAcademicSemesterFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IAcademicSemester[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const academicSemesterSearchableField = ['title', 'code', 'yaer'];
  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      $or: academicSemesterSearchableField.map(field => ({
        [field]: {
          $regex: searchTerm,
          $option: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelper.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const result = await AcademicSemester.find({ $and: andCondition })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await AcademicSemester.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export const AcademicSemesterSercvice = {
  cretaeSemester,
  getAllSemesters,
};
