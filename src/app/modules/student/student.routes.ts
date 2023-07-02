import express from 'express';

import validateRequest from '../../middlewares/validateRequest';
import { StudentController } from './student.contoller';
import { StudentValidaion } from './student.validation';

const router = express.Router();

router.get('/', StudentController.getAllStudents);
router.get('/:id', StudentController.getSingleStudent);
router.delete('/:id', StudentController.deleteStudent);

router.patch(
  '/:id',
  validateRequest(StudentValidaion.updateStudentZodSchema),
  StudentController.updateStudent
);

export const StudentRouter = router;
