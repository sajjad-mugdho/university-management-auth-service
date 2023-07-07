import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmanetValidation } from './managementDepartment.validation';
import { ManagementDepartmanetController } from './managementDepartment.controller';

const router = express.Router();

router.post(
  '/create-management',
  validateRequest(
    ManagementDepartmanetValidation.createManagementDepartmentZodSchema
  ),
  ManagementDepartmanetController.createDepartment
);

export const ManagementDepartmanetRoutes = router;
