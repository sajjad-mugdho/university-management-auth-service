import { RequestHandler } from 'express';

import { logger } from '../../../shared/logger';
import { AcademicSemesterSercvice } from './academicSemester.service';
const cretaeSemester: RequestHandler = async (req, res, next) => {
  try {
    //req-validation

    const { ...academicSemesterData } = req.body;
    logger.info('data:', academicSemesterData);
    const result = await AcademicSemesterSercvice.cretaeSemester(
      academicSemesterData
    );
    logger.info('result:', result);
    res.status(200).json({
      sucsess: true,
      message: 'Academic Semester Created Sucsessfully',
      data: result,
    });
  } catch (error) {
    next(error);

    //   error: error,
    //   // sucsess: false,
    //   // message: `Failed to create user${error}`,
    // })
  }
};

export const AcademicSemesterController = {
  cretaeSemester,
};
