import { IAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

export const findLastStudentId = async (): Promise<string | undefined> => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastStudent?.id ? lastStudent.id.substring(4) : undefined;
};

export const genareteStudentID = async (
  academicSemester: IAcademicSemester | null
) => {
  const currentId =
    (await findLastStudentId()) || (0).toString().padStart(5, '0');
  let incrimentedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrimentedId = `${academicSemester?.year.substring(2)}${
    academicSemester?.code
  }${incrimentedId}`;

  return incrimentedId;
};

export const findLastFacultyId = async (): Promise<string | undefined> => {
  const lastFaculty = await User.findOne(
    {
      role: 'faculty',
    },
    { id: 1, _id: 0 }
  )
    .sort({ createdAt: -1 })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const genareteFacultyId = async (): Promise<string> => {
  const currentId =
    (await findLastFacultyId()) || (0).toString().padStart(5, '0');
  let incrimentedId = (parseInt(currentId) + 1).toString().padStart(5, '0');

  incrimentedId = `F-${incrimentedId}`;
  return incrimentedId;
};
