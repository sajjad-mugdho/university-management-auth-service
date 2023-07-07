import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmanetValidation } from './managementDepartment.validation';
import { ManagementDepartmanetController } from './managementDepartment.controller';

const router = express.Router();

router.get('/', ManagementDepartmanetController.getAllDepartments);
router.get('/:id', ManagementDepartmanetController.getSingleDepartment);
router.delete('/:id', ManagementDepartmanetController.deleteDepartment);
router.patch(
  '/:id',
  validateRequest(
    ManagementDepartmanetValidation.updateManagementDepartmentZodSchema
  ),
  ManagementDepartmanetController.updateDepartment
);

router.post(
  '/create-management',
  validateRequest(
    ManagementDepartmanetValidation.createManagementDepartmentZodSchema
  ),
  ManagementDepartmanetController.createDepartment
);

export const ManagementDepartmanetRoutes = router;
