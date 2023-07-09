import express from 'express';
import { UserRouter } from '../app/modules/user/user.routes';
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/academicSemester.route';
import { AcademicFacultyRouters } from '../app/modules/academicFaculty/academicFaculty.route';
import { AcademicDepartmentRoutes } from '../app/modules/academicDepartment/academicDepartment.route';
import { StudentRouter } from '../app/modules/student/student.routes';
import { FacultyRoutes } from '../app/modules/faculty/faculty.routes';
import { ManagementDepartmanetRoutes } from '../app/modules/managementDepartmant/managementDeparment.routes';
import { AdminRoutes } from '../app/modules/admin/admin.router';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRouter,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRouters,
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes,
  },
  {
    path: '/students',
    route: StudentRouter,
  },
  {
    path: '/faculties',
    route: FacultyRoutes,
  },
  {
    path: '/management-departments',
    route: ManagementDepartmanetRoutes,
  },
  {
    path: '/admins',
    route: AdminRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRouter);
// router.use('/academic-semester/', AcademicSemesterRoutes);

export default router;
