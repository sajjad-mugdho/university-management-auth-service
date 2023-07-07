import { IManagementDepartments } from './managementDepartment.interface';
import { ManagementDepartmanet } from './managementDepartment.model';

const createDepartment = async (
  payload: IManagementDepartments
): Promise<IManagementDepartments | null> => {
  const result = await ManagementDepartmanet.create(payload);
  return result;
};

export const ManagementDepartmanetService = {
  createDepartment,
};
