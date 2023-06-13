import { NextFunction, Request, Response } from 'express'

const globalErrorHandler = (
  err: string | number | boolean,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  next()
}
export default globalErrorHandler
