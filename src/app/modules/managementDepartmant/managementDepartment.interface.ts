import { Model } from 'mongoose';

export type IManagementDepartments = {
  title: string;
};

export type ManagementDepartmentModel = Model<
  IManagementDepartments,
  Record<string, unknown>
>;

export type IManagementDepartmentsFilters = {
  searchTerm?: string;
};
