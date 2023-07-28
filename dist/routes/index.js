'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const user_routes_1 = require('../app/modules/user/user.routes');
const academicSemester_route_1 = require('../app/modules/academicSemester/academicSemester.route');
const academicFaculty_route_1 = require('../app/modules/academicFaculty/academicFaculty.route');
const academicDepartment_route_1 = require('../app/modules/academicDepartment/academicDepartment.route');
const student_routes_1 = require('../app/modules/student/student.routes');
const faculty_routes_1 = require('../app/modules/faculty/faculty.routes');
const managementDeparment_routes_1 = require('../app/modules/managementDepartmant/managementDeparment.routes');
const admin_router_1 = require('../app/modules/admin/admin.router');
const router = express_1.default.Router();
const moduleRoutes = [
  {
    path: '/users',
    route: user_routes_1.UserRouter,
  },
  {
    path: '/academic-semesters',
    route: academicSemester_route_1.AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: academicFaculty_route_1.AcademicFacultyRouters,
  },
  {
    path: '/academic-departments',
    route: academicDepartment_route_1.AcademicDepartmentRoutes,
  },
  {
    path: '/students',
    route: student_routes_1.StudentRouter,
  },
  {
    path: '/faculties',
    route: faculty_routes_1.FacultyRoutes,
  },
  {
    path: '/management-departments',
    route: managementDeparment_routes_1.ManagementDepartmanetRoutes,
  },
  {
    path: '/admins',
    route: admin_router_1.AdminRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
// router.use('/users/', UserRouter);
// router.use('/academic-semester/', AcademicSemesterRoutes);
exports.default = router;
