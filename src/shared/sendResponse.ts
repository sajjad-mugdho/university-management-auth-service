// import { Response } from 'express';

// type IApiReponse<T> = {
//   statusCode: number;
//   success: boolean;
//   message?: string | null;
//   meta?: {
//     page: number;
//     limit: number;
//     total: number;
//   } | null;
//   data?: T | null | undefined;
// };

// const sendReponse = <T>(res: Response, data: IApiReponse<T>): void => {
//   const responseData: IApiReponse<T> = {
//     statusCode: data.statusCode,
//     success: data.success,
//     message: data.message || null,
//     meta: data.meta || null || undefined,
//     data: data.data || null || undefined,
//   };

//   res.status(data.statusCode).json(responseData);
// };

// export default sendReponse;

import { Response } from 'express';

type IApiReponse<T> = {
  statusCode: number;
  success: boolean;
  message?: string | null;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: T | null | undefined;
};

const sendResponse = <T>(res: Response, data: IApiReponse<T>): void => {
  const responseData: IApiReponse<T> = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    meta: data.meta || null || undefined,
    data: data.data || null || undefined,
  };

  res.status(data.statusCode).json(responseData);
};

export default sendResponse;
