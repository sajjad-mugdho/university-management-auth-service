import { Schema, model } from 'mongoose';
import {
  IManagementDepartments,
  ManagementDepartmentModel,
} from './managementDepartment.interface';

const ManagementDepartmentSchema = new Schema<
  IManagementDepartments,
  ManagementDepartmentModel
>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const ManagementDepartmanet = model<
  IManagementDepartments,
  ManagementDepartmentModel
>('ManagementDepartmant', ManagementDepartmentSchema);
