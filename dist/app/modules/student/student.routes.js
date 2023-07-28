'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.StudentRouter = void 0;
const express_1 = __importDefault(require('express'));
const validateRequest_1 = __importDefault(
  require('../../middlewares/validateRequest')
);
const student_contoller_1 = require('./student.contoller');
const student_validation_1 = require('./student.validation');
const router = express_1.default.Router();
router.get('/', student_contoller_1.StudentController.getAllStudents);
router.get('/:id', student_contoller_1.StudentController.getSingleStudent);
router.delete('/:id', student_contoller_1.StudentController.deleteStudent);
router.patch(
  '/:id',
  (0, validateRequest_1.default)(
    student_validation_1.StudentValidaion.updateStudentZodSchema
  ),
  student_contoller_1.StudentController.updateStudent
);
exports.StudentRouter = router;
