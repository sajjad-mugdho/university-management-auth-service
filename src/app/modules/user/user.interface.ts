import { Model } from 'mongoose';
import { Types } from 'mongoose';
import { IStudent } from '../student/student.interface';

/* eslint-disable @typescript-eslint/consistent-type-definitions */
export interface IUser {
  id: string;
  role: string;
  password: string;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId;
  admin?: Types.ObjectId;
}

export type UserModel = Model<IUser, Record<string, unknown>>;
