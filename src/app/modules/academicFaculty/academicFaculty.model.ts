import { Schema, model } from 'mongoose';
import {
  AcademicFacultyModle,
  IAcademicFaculty,
} from './academicFaculty.interface';

const AcademicFacultySchema = new Schema<
  IAcademicFaculty,
  AcademicFacultyModle
>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const AcademicFaculty = model<IAcademicFaculty, AcademicFacultyModle>(
  'AcademicFaculty',
  AcademicFacultySchema
);
