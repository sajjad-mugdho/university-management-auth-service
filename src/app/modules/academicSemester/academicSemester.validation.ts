import { z } from 'zod';

const createAcademicSemesterZodSchema = z.object({
  body: z.object({
    title: z.enum(['Autum', 'Summer', 'Fall'], {
      required_error: 'Title is Required',
    }),
    year: z.number({
      required_error: 'Year is Required',
    }),
    code: z.enum(['01', '02', '03'], {
      required_error: 'Semester Code is Required',
    }),
    startMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      {
        required_error: 'Start Month is Required',
      }
    ),
    endMonth: z.enum(
      [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      {
        required_error: 'End Month is Required',
      }
    ),
  }),
});

export const AcademicSemesterValidation = {
  createAcademicSemesterZodSchema,
};

// await createUserZodSchema.parseAsync(req)
