import { z } from 'zod';

const loginZodValidation = z.object({
  body: z.object({
    id: z.string({
      required_error: 'Id is Required',
    }),
    password: z.string({
      required_error: 'password is Required',
    }),
  }),
});

export const AuthValidation = {
  loginZodValidation,
};
