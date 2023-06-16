import express from 'express';
import { UserRouter } from '../app/modules/user/user.routes';
import { AcademicSemesterRoutes } from '../app/modules/academicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users/',
    route: UserRouter,
  },
  {
    path: '/academic-semester/',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

// router.use('/users/', UserRouter);
// router.use('/academic-semester/', AcademicSemesterRoutes);

export default router;
