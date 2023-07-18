"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRouters = void 0;
const express_1 = __importDefault(require("express"));
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const router = express_1.default.Router();
//Create Faculty Routes
router.post('/create-faculty', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.createFacultyZodSchema), academicFaculty_controller_1.AcademicFacultyController.createFaculty);
// Get Single faculty Routes
router.get('/:id', academicFaculty_controller_1.AcademicFacultyController.getSingleFaculty);
// Update Faculty Routes
router.patch('/:id', (0, validateRequest_1.default)(academicFaculty_validation_1.AcademicFacultyValidation.updatefacultyZodSchema), academicFaculty_controller_1.AcademicFacultyController.updateFaculty);
//Delete Faculty Routes
router.delete('/:id', academicFaculty_controller_1.AcademicFacultyController.deleteFaculty);
// Get All Facaltis Routes
router.get('/', academicFaculty_controller_1.AcademicFacultyController.getAllFaculties);
exports.AcademicFacultyRouters = router;
