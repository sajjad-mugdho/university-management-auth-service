/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { Model } from 'mongoose';

export interface IAcademicSemester {
  title: 'Autum' | 'Summer' | 'Fall';
  year: number;
  code: string;
  startMonth: string;
  endMonth: string;
}

export type AcademicSemesterModel = Model<IAcademicSemester>;
