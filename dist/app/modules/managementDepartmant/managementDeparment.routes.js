"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementDepartmanetRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const managementDepartment_validation_1 = require("./managementDepartment.validation");
const managementDepartment_controller_1 = require("./managementDepartment.controller");
const router = express_1.default.Router();
router.get('/', managementDepartment_controller_1.ManagementDepartmanetController.getAllDepartments);
router.get('/:id', managementDepartment_controller_1.ManagementDepartmanetController.getSingleDepartment);
router.delete('/:id', managementDepartment_controller_1.ManagementDepartmanetController.deleteDepartment);
router.patch('/:id', (0, validateRequest_1.default)(managementDepartment_validation_1.ManagementDepartmanetValidation.updateManagementDepartmentZodSchema), managementDepartment_controller_1.ManagementDepartmanetController.updateDepartment);
router.post('/create-management', (0, validateRequest_1.default)(managementDepartment_validation_1.ManagementDepartmanetValidation.createManagementDepartmentZodSchema), managementDepartment_controller_1.ManagementDepartmanetController.createDepartment);
exports.ManagementDepartmanetRoutes = router;
