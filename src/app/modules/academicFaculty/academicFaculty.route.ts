import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

//Create Faculty Routes

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyController.createFaculty
);

// Get Single faculty Routes

router.get('/:id', AcademicFacultyController.getSingleFaculty);

// Update Faculty Routes

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updatefacultyZodSchema),
  AcademicFacultyController.updateFaculty
);

//Delete Faculty Routes

router.delete('/:id', AcademicFacultyController.deleteFaculty);

// Get All Facaltis Routes

router.get('/', AcademicFacultyController.getAllFaculties);

export const AcademicFacultyRouters = router;
